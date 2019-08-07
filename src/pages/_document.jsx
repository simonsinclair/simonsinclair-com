/* eslint-disable react/no-danger */
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { GA_TRACKING_ID } from '../lib/gtag';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link rel="preload" as="font" crossOrigin="crossorigin" type="font/woff2" href="/static/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Latin1.woff2" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script dangerouslySetInnerHTML={
            { __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date);gtag("config","${GA_TRACKING_ID}");` }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
