import Head from 'next/head';
import '../styles/globals.scss';
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../apollo/apollo'
import '../node_modules/tailwindcss/dist/tailwind.min.css';
import Nav from '../components/Nav.component';
import Footer from '../components/Footer.component';

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <style global jsx>
        {`
      .gradient {
        background: linear-gradient(90deg, #3365d5 0%, #51b4da 100%);
      }
      `}
      </style>
      <Head>
        <title>My first website</title>
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  )
}

export default withData(MyApp);
