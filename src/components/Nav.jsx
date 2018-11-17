import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/" prefetch>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/#work" prefetch>
          <a>Work</a>
        </Link>
      </li>
      <li>
        <Link href="/about" prefetch>
          <a>About</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
