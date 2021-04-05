import { AppBar } from '../components/AppBar';
import styles from '../styles/pages/home.module.scss';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';



export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <AppBar />
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey, Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br/> 
            <span> for $9.90 month</span>  
          </p>
          <SubscribeButton />
        </section>
        <img src="/assets/avatar.svg" alt="Girl coding"/>
      </main>
    </>
  )
}
