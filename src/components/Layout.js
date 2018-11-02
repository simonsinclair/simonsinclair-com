import './Layout.css';
import Head from '../components/Head';

// To do:
// - title prop
// - description prop

const Layout = (props) => (
  <div>
    <Head />
    { props.children }
  </div>
);

export default Layout;
