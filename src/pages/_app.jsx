import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';

import * as gtag from '../lib/gtag';
import GlobalStyle from '../components/GlobalStyle';
import Masthead from '../components/Masthead/Masthead';
import Footer from '../components/Footer/Footer';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

const THEME = {
  brand: '#0071F0',
};

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={THEME}>
          <div className="page">
            <GlobalStyle />
            <Masthead />
            <Component {...pageProps} />
            <Footer />
          </div>
        </ThemeProvider>
      </Container>
    );
  }
}

export default CustomApp;
