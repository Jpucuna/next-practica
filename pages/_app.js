import "bootswatch/dist/cosmo/bootstrap.min.css";
import Head from 'next/head';
import '../global.css';


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portafolio Web</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
