import "bootswatch/dist/cosmo/bootstrap.min.css";
import Head from 'next/head'

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
