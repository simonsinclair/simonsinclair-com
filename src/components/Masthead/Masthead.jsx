import Link from 'next/link';

import NavBar from '../NavBar/NavBar';

const Masthead = () => (
  <header className="container">
    <strong className="logo">
      <Link href="/">
        <a>Simon Sinclair</a>
      </Link>
    </strong>

    <NavBar />

    <style jsx>
      {`
        header {
          align-items: center;
          display: flex;
          justify-content: space-between;
          padding-top: 1.5rem;
        }
      `}
    </style>
  </header>
);

export default Masthead;
