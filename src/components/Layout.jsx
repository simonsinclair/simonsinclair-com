import PropTypes from 'prop-types';
import normalizeCss from 'normalize.css';

import Head from './Head';
import Masthead from './Masthead';
import Footer from './Footer';

const Layout = ({ title, description, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <Masthead />
    { children }
    <Footer />

    <style jsx global>
      {`
        ${normalizeCss}

        html {
          box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        body {
          color: #444;
          font-family: -apple-system, BlinkMacSystemFont, “Segoe UI”, Roboto, Oxygen, Ubuntu, Cantarell, “Fira Sans”, “Droid Sans”, “Helvetica Neue”, sans-serif;
        }
      `}
    </style>
  </div>
);

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

Layout.defaultProps = {
  title: '',
  description: '',
};

export default Layout;
