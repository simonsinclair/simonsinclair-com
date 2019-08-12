/* eslint-disable react/no-danger */

import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';

import * as gtag from '../lib/gtag';
import GlobalStyle from '../components/GlobalStyle';
import SecondPhaseFonts from '../components/SecondPhaseFonts/SecondPhaseFonts';
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
            <Head>
              <link rel="preload" as="font" crossOrigin="crossorigin" type="font/woff2" href="/static/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Latin1.woff2" />
              <link rel="preconnect" href="https://www.google-analytics.com" />
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
              <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date);gtag("config","${gtag.GA_TRACKING_ID}");` }} />
            </Head>
            <GlobalStyle />
            <SecondPhaseFonts />
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
