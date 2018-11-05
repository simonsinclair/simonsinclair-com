import { string } from 'prop-types';

import './Layout.css';
import Head from '../components/Head';

const Layout = (props) => (
  <div>
    <Head>
      <title>{ props.title || '' }</title>
      <meta name="description" content={ props.description || '' } />
    </Head>
    { props.children }
  </div>
);

Layout.propTypes = {
  title: string,
  description: string,
};

export default Layout;
