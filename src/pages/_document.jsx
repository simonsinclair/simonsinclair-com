// '_document' is only rendered on the server side and not on the client
// side. Event handlers like `onClick` can't be added to this file.
// ---------------------------------------------------------------------------------
// Note: React-components outside of <Main /> will not be initialised by the browser
// browser. Do not add application logic here. If you need shared components in all
// your pages (like a menu or a toolbar), take a look at the <App> component instead.

import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

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
