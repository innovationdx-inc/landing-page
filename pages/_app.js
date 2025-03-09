import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.$zoho=window.$zoho || {};
              $zoho.salesiq=$zoho.salesiq||{ready:function(){}};
            `
          }}
        />
        <script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siq6fff96a40123d01b0f4bd373ac30be2ad8bef79fee774a55f14de0ba75243b1e"
          defer
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 