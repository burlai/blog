import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
      </Head>
      <h1 className={utilStyles.textCentered}>First Post</h1>
      <article className={utilStyles.textCentered}>
        <p>Text goes here</p>
      </article>
    </Layout>
  );
}
