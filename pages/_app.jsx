import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/nav.css";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
