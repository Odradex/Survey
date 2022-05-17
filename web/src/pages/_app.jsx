import Head from 'next/head';

import 'styles/globals.css';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Опрос</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
