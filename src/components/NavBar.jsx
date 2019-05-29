import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';

const Nav = ({ router }) => {
  const { route } = router;

  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link href="/">
            <a className={route === '/' ? 'active' : ''}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={route === '/about' ? 'active' : ''}>About</a>
          </Link>
        </li>
      </ul>

      <style jsx>
        {`
          .active {
            border-bottom: 2px solid;
          }

          a {
            display: block;
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
