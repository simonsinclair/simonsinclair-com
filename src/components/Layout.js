import { string } from 'prop-types';
import normalizeCss from 'normalize.css';

import Head from '../components/Head';

const Layout = (props) => (
  <div>
    <Head>
      <title>{ props.title || '' }</title>
      <meta name="description" content={ props.description || '' } />
    </Head>
    { props.children }
    <style jsx="" global="">{`
      ${ normalizeCss }

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
    `}</style>
  </div>
);

Layout.propTypes = {
  title: string,
  description: string,
};

export default Layout;
