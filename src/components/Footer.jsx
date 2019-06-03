const Footer = () => (
  <footer className="container">
    <p>
      <small>
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Simon Sinclair.
      </small>
    </p>

    <style jsx>
      {`
        footer {}
      `}
    </style>
  </footer>
);

export default Footer;
