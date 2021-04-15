//Importamos o NextAuth e o Providers

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { fauna } from '../../../services/fauna';
import { query as q } from 'faunadb';

export default NextAuth({
    //Podemos configurar um ou mais authentication providers
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            //No caso do github devemos passar esse parametro scope, que e nada mais que as
            //informaçoes que desejamos obter(olhar documentacao para mais detalhes), e que 
            //nessa aplicação utilizaremos apenas as informações de usuario (user, name, photo)
            scope: 'read:user', //Obs: na documentancao tem detalhado quais os nomes do scope, iremos utilizar esse
                                // 'read:user' para pegar as informações apenas do perfil.
                                // Caso quisesse adicionar mais escopos bastava por uma virgula e adicionar mais
                                // Ex: 'read:user, read:user:email'
        }),

        // ...aqui podemos adicionar mais providers se quisermos
    ],
    //A database é opcional, mas é necessario caso queira persistir contas num banco.
    //database: process.env.DATABASE_URL, 
    
    //Callbacks - basicamente sao funcoes automaticas que sao executadas pelo NextAuth assim que o usuario faz alguma ação
    callbacks: {
        async signIn(user, account, profile) {
            const { email } = user;

            try {
                await fauna.query(
                    q.Create(
                        q.Collection('users'),
                        { data: { email }}
                    )
                )
                return true
            } catch {
                return false
            }     
          },
    },
});