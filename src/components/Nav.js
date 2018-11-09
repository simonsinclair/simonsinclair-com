import Link from 'next/link';

export default () => (
  <nav>
    <ul>
      <li>
        <Link href="/" prefetch>
          <a>Home</a>
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
