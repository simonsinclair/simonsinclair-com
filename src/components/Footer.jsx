import PropTypes from 'prop-types';

const Footer = ({ date }) => (
  <footer className="container">
    <p>
      <small>
        &copy;
        {' '}
        {date.getFullYear()}
        {' '}
        Simon Sinclair.
      </small>
    </p>

    <style jsx>
      {`
        footer {
          margin-top: 3rem;
          padding-bottom: 1.5rem;
        }
      `}
    </style>
  </footer>
);

Footer.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Footer;
