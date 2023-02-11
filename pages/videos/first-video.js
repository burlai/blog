import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>The main HTML learning resources</title>
      </Head>
      {/* <h2 className={utilStyles.textCentered}>The main HTML learning resources</h2> */}
      <iframe
          className={utilStyles.video}
          src="https://www.youtube.com/embed/ukmEEPynL6g"
        ></iframe>
    </Layout>
  );
}