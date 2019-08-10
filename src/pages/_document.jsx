// '_document' is only rendered on the server side and not on the client
// side. Event handlers like `onClick` can't be added to this file.
// ---------------------------------------------------------------------------------
// Note: React-components outside of <Main /> will not be initialised by the browser
// browser. Do not add application logic here. If you need shared components in all
// your pages (like a menu or a toolbar), take a look at the <App> component instead.

/* eslint-disable react/no-danger */
import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { GA_TRACKING_ID } from '../lib/gtag';

class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage({
      enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
    });
    return {
      ...page,
      styled: sheet.getStyleElement(),
    };
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preload" as="font" crossOrigin="crossorigin" type="font/woff2" href="/static/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Latin1.woff2" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script dangerouslySetInnerHTML={
            { __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date);gtag("config","${GA_TRACKING_ID}");` }}
          />
          {this.props.styled}
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
