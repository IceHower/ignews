import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from 'next-auth/client';
import { fauna } from "../../services/fauna";
import { stripe } from '../../services/stripe';
import { query as q } from 'faunadb';


interface User {
    ref: {
        id:string
    }
    data: {
        stripe_customer_id:string
    }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST') {
        // usamos esse metodo do next para pegar a session do usuario dentro do cookie
        const session = await getSession({ req });

        const user = await fauna.query<User>(
            q.Get(
                q.Match(
                    q.Index('user_by_email'),
                    q.Casefold(session.user.email)
                )
            )
        )

        let customerId = user.data.stripe_customer_id;
        
        if(!customerId) {
            // cria um customer no stripe passando as informacoes(session) obtidas dentro do cookie
            const stripeCustomer = await stripe.customers.create({
                email: session.user.email,
            });
            await fauna.query(
                q.Update(
                    q.Ref(q.Collection('users'), user.ref.id),
                    {
                        data: {
                            stripe_customer_id: stripeCustomer.id
                        }
                    }
                )
            )
            
            customerId = stripeCustomer.id;
        }

        
        // Para que podemos criar uma sessao de checkout precisamos criar primeiro um customer no stripe
        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: customerId,
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items: [ 
            {
                price: 'price_1Id2OoLW6fMV8xFFfiqry1Hz', quantity: 1
            }
        ],
        mode: 'subscription',
        allow_promotion_codes: true,
        success_url: process.env.STRIPE_SUCCESS_URL,
        cancel_url: process.env.STRIPE_HOME_URL
        })
        return res.status(200).json({ sessionId: stripeCheckoutSession.id })
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method not allowed');
    }
}