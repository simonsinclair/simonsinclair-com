import PropTypes from 'prop-types';

import Head from '../Head/Head';
import Masthead from '../Masthead/Masthead';
import Footer from '../Footer/Footer';

const Page = ({ title, description, children }) => (
  <div className="page">
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <Masthead />
    {children}
    <Footer date={new Date()} />
  </div>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Page.defaultProps = {
  description: '',
};

export default Page;
