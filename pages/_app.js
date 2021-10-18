import 'tailwindcss/tailwind.css';
import '../styles/glider.css';
import Head from 'next/head';
import Layout from '../components/ui/Layout';
import Storyblok from '../lib/storyblok';
import '../styles/globals.css';

function MyApp({ Component, pageProps, ...props }) {
  const { layout } = props;
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/87c48f6828.js"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>
      <Layout data={layout}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

MyApp.getInitialProps = async () => {
  // Fetch data for Header & Footer
  let header = await Storyblok.get(`cdn/stories/components/header/header`, {
    version: 'draft',
    cv: Date.now(),
  });
  let footer = await Storyblok.get(`cdn/stories/components/footer/footer`, {
    version: 'draft',
    cv: Date.now(),
  });
  return {
    layout: {
      header: header.data.story,
      content: '',
      footer: footer.data.story,
    },
  };
};
