import PropTypes from 'prop-types';
import normalizeCss from 'normalize.css';
import Router from 'next/router';

import Head from './Head';
import Nav from './Nav';
import * as gtag from '../lib/gtag';

Router.events.on('routeChangeComplete', (url) => {
  gtag.pageview(url);
  // console.log('routeChangeComplete', url);
});

const Page = ({ title, description, children }) => (
  <div>
    <Head>
      <title>{ title || '' }</title>
      <meta name="description" content={description || ''} />
    </Head>
    <Nav />
    { children }
    <style jsx="" global="">
      {`
        ${normalizeCss}

        html {
          box-sizing: border-box;
          font-size: 16px;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        body,
        html {
          height: 100%;
        }

        body {
          background-color: #193441;
          color: #FCFFF5;
          font-family: -apple-system, BlinkMacSystemFont, “Segoe UI”, Roboto, Oxygen, Ubuntu, Cantarell, “Fira Sans”, “Droid Sans”, “Helvetica Neue”, sans-serif;
          font-size: 1.1875rem;
          line-height: 1.6875rem;
        }

        h1 {
          font-size: 5rem;
          line-height: 5.0625rem;
          letter-spacing: -2px;
        }

        h1,
        h2 {
          margin-top: 3.375rem;
          margin-bottom: 1.6875rem;
        }

        h1,
        h2,
        h3,
        h4 {
          font-weight: 400;
        }
      `}
    </style>
  </div>
);

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

Page.defaultProps = {
  title: '',
  description: '',
};

export default Page;
