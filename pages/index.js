import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.textCentered}`}>
        <p>
          Hello, I'm Konstantyn. I'm a frontend and web engineer working mostly
          with React stack
        </p>
        <p>
          Here is my{" "}
          <Link
            target="_blank"
            href="https://www.youtube.com/channel/UCoGT8ojMpkxub2S2dEnXhow"
          >
            Youtube channel
          </Link>
        </p>
        <h3>Introductory video of my HTML for beginners course:</h3>
        <iframe
          className={utilStyles.video}          
          src="https://www.youtube.com/embed/QIJWlGSCAz8"
        ></iframe>
      </section>
      <section className={utilStyles.textCentered}>
        <h2 className={utilStyles.headingLg}>Videos</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="/videos/first-video">First Video</Link>
          </li>
        </ul>
      </section>
      <section className={utilStyles.textCentered}>
        <h2 className={utilStyles.headingLg}>Articles</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="/posts/first-post">First Post</Link>
          </li>
        </ul>
      </section>
      <section className={utilStyles.textCentered}>
        <h2 className={utilStyles.headingLg}>Contact</h2>
        <p>
          Check out my videos and articles and contact me{" "}
          <Link href="/contact">here</Link>
        </p>
      </section>
    </Layout>
  );
}