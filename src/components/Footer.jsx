/* eslint-disable react/jsx-one-expression-per-line */
// import * as gtag from '../lib/gtag';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  const handleClickExternal = (e) => {
    e.preventDefault();
    // gtag.event({
    //   action: 'submit_form',
    //   category: 'Contact',
    //   label: this.state.message
    // });
    console.log('To do: gtag.event.');
  };

  return (
    <footer className="container">
      <p><small>&copy; {year} Simon Sinclair. <a onClick={handleClickExternal} href="https://github.com/simonsinclair/simonsinclair-com">Source</a>.</small></p>

      <style jsx>
        {`
          footer {}
        `}
      </style>
    </footer>
  );
};

export default Footer;
