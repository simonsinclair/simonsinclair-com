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
    </nav>
  );
};

Nav.propTypes = {
  router: PropTypes.shape({
    route: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Nav);
