import Link from 'next/link';

export default () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a href="/">Home</a>
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
