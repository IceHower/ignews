import { AppProps } from 'next/app'; //Importamos as props dentro do next app
import '../styles/global.scss';
import { Provider as NextAuthProvider} from 'next-auth/client';
import { AppBar } from '../components/AppBar';

function MyApp({ Component, pageProps }: AppProps) { //Definimos a tipagem dos components do app como sendo AppProps que importamos 
  return (
        <NextAuthProvider session={pageProps.session}>
          <AppBar />
          <Component {...pageProps} /> 
        </NextAuthProvider>
  )
}

export default MyApp
