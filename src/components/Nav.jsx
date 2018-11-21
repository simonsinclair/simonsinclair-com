import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';

const Nav = ({ router }) => {
  const { route } = router;

  return (
    <nav>
      <ul>
        <li>
          <Link href="/" prefetch>
            <a className={route === '/' ? 'active' : ''}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" prefetch>
            <a className={route === '/about' ? 'active' : ''}>About</a>
          </Link>
        </li>
      </ul>
      <style jsx>
        {`
          .active {
            color: #FFF;
          }
        `}
      </style>
    </nav>
  );
};

Nav.propTypes = {
  router: PropTypes.shape({}).isRequired,
};

export default withRouter(Nav);
