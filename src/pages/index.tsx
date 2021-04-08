import { AppBar } from '../components/AppBar';
import styles from '../styles/pages/home.module.scss';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { GetStaticProps } from 'next';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}

export default function Home({product} : HomeProps) {
  console.log(product.amount)
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey, Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br/> 
            <span> for {product.amount} month</span>  
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/assets/avatar.svg" alt="Girl coding"/>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {
      const price = await stripe.prices.retrieve('price_1Id2OoLW6fMV8xFFfiqry1Hz', {
        expand: ['product']
      }); // Faz a chamada da api

      const product = {
        priceId: price.id,
        amount: new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format((price.unit_amount / 100)),

      }
      return {
        props: {
          product,
        },
        revalidate: 60 * 60 * 24 // 24h - Quanto tempo em segundos a pagina precisa ser revalidada
      }
}
