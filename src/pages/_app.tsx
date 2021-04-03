import { AppProps } from 'next/app'; //Importamos as props dentro do next app

function MyApp({ Component, pageProps }: AppProps) { //Definimos a tipagem dos components do app como sendo AppProps que importamos 
  return <Component {...pageProps} />
}

export default MyApp
