import 'normalize.css';
import Head from '../components/Head';

const SYSTEM_FONTS_FAMILY = '-apple-system, BlinkMacSystemFont, “Segoe UI”, “Roboto”, “Oxygen”, “Ubuntu”, “Cantarell”, “Fira Sans”, “Droid Sans”, “Helvetica Neue”, sans-serif';

const Layout = (props) => (
  <div>
    <Head />
    { props.children }
    <style jsx global>{`
      html {
        box-sizing: border-box;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
      body {
        background-color: #193441;
        color: #FCFFF5;
        font-family: ${ SYSTEM_FONTS_FAMILY };
      }
    `}</style>
  </div>
);

export default Layout;
