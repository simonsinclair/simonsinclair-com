import Document, { Head, Main, NextScript } from 'next/document';

const GA_TRACKING_ID = 'UA-128283216-1';

const createGaTrackingScript = (trackingId) => {
  return {
    __html:
`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${ trackingId }');`
  }
}

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  };

  render () {
    return (
      <html lang="en-GB">
        <Head>
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <script async src={ `https://www.googletagmanager.com/gtag/js?id=${ GA_TRACKING_ID }` } />
          <script dangerouslySetInnerHTML={ createGaTrackingScript() } />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
};
