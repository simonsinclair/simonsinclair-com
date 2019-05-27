/* eslint-disable react/jsx-one-expression-per-line */
// import * as gtag from '../lib/gtag';

const Footer = () => {
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
    <footer>
      <p>Copyright &copy; 2000&ndash;2019 Simon Sinclair. <a onClick={handleClickExternal} href="https://github.com/simonsinclair/simonsinclair-com">Source</a>.</p>

      <style jsx>
        {`
          p {}
        `}
      </style>
    </footer>
  );
};

export default Footer;
