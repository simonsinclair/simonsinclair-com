import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import fontsCss from '../../fonts.css';
import Head from '../Head/Head';
import Masthead from '../Masthead/Masthead';
import Footer from '../Footer/Footer';

const COLOURS = {
  brand: '#0071F0',
};

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 375px) {
    html {
      font-size: 18px;
      line-height: 27px;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    color: #222;
    font-family: "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0;

    font-style: normal;
    font-weight: 400;
  }

  @supports (display: grid) {
    html,
    body,
    #__next {
      height: 100%;
    }

    .page {
      display: grid;
      grid-template-rows: auto 1fr auto;
      min-height: 100%;
    }

    .page > header,
    .page > main,
    .page > footer {
      width: 100%;
    }

    .page > header {
      grid-row-start: 1;
      grid-row-end: 2;
    }

    .page > main {
      grid-row-start: 2;
      grid-row-end: 3;
    }

    .page > footer {
      grid-row-start: 3;
      grid-row-end: 4;
    }
  }

  h1,
  h2 {
    letter-spacing: -0.020em;
  }

  h1,
  .alpha {
    font-size: 4.2222222rem;
    line-height: 4.5rem;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
  }

  h2,
  .beta {
    font-size: 2.6111111rem;
    line-height: 3rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  p,
  ul {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  a {
    font-family: "IBM Plex Mono", "Menlo", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier, monospace;
    color: ${COLOURS.brand};
    text-decoration: none;
  }

  .container {
    margin: 0 auto;
    max-width: 960px;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }

  .section {
    margin-top: 3rem;
  }

  .nav-list {
    padding-left: 0;
    list-style: none;
    margin-left: -0.5rem;
  }
    .nav-list li {
      margin-right: 0.5rem;
      margin-left: 0.5rem;
    }
    .nav-list a {
      display: block;
    }

  .nav-list--inline {
    display: flex;
  }
  .nav-list--inline a {
    display: inline-block;
  }
`;

const Page = ({ title, description, children }) => (
  <div className="page">
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <GlobalStyle />
    <Masthead />
    {children}
    <Footer date={new Date()} />
  </div>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Page.defaultProps = {
  description: '',
};

export default Page;
