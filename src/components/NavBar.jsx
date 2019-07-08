import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';

const Nav = ({ router }) => {
  const { route } = router;

  return (
    <nav className="nav-bar">
      <ul className="nav-list nav-list--inline">
        <li>
          <Link href="/">
            <a className={route === '/' ? 'active' : ''}>Home</a>
          </Link>
        </li>
      </ul>

      <style jsx>
        {`
          .nav-bar {}
          .active {}
        `}
      </style>
    </nav>
  );
};

Nav.propTypes = {
  router: PropTypes.shape({}).isRequired,
};

export default withRouter(Nav);
