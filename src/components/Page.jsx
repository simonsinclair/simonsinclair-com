import PropTypes from 'prop-types';
import normalizeCss from 'normalize.css';

import Head from './Head';
import Masthead from './Masthead';
import Footer from './Footer';

const Page = ({ title, description, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <Masthead />
    {children}
    <Footer today={new Date()} />

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
          color: #111;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          margin: 0;
        }

        a {
          text-decoration: none;
        }

        .container {
          margin: 0 auto;
          max-width: 960px;
          padding-right: 16px;
          padding-left: 16px;
        }

        .nav-list {
          padding-left: 0;
          list-style: none;
          margin-left: -0.5em;
        }
          .nav-list li {
            margin-right: 0.5em;
            margin-left: 0.5em;
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
