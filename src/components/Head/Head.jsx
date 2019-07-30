import NextHead from 'next/head';
import PropTypes from 'prop-types';

const Head = ({ children }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    { children }
  </NextHead>
);

Head.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Head;
