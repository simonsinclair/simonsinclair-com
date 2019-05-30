import Link from 'next/link';

import NavBar from './NavBar';

const Masthead = () => (
  <header className="container">
    <strong className="logo"><Link href="/"><a>Simon Sinclair</a></Link></strong>
    <NavBar />

    <style jsx>
      {`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          background-color: #111;
          display: block;
          line-height: 1;
          padding: 0.75rem 1rem;
        }
         .logo a {
           color: #FFF;
           -webkit-font-smoothing: antialiased;
           -moz-osx-font-smoothing: grayscale;
         }

        .nav-bar {}
      `}
    </style>
  </header>
);

export default Masthead;
