import Link from 'next/link';

export default () => (
  <nav>
    <ul>
      <li>
          <a href="/">Home</a>
        <Link href="/" prefetch>
        </Link>
      </li>
      <li>
        <Link href="/about" prefetch>
          <a href="/about">About</a>
        </Link>
      </li>
    </ul>
  </nav>
);
