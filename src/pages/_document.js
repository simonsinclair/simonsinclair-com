import Document, { Head, Main, NextScript } from 'next/document';

const GA_TRACKING_ID = 'UA-128283216-1';

const generateGaTrackingScript = (trackingId) => {
  return {
    __html: `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","${ trackingId }");`
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
          <script dangerouslySetInnerHTML={ generateGaTrackingScript(GA_TRACKING_ID) } />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
};
