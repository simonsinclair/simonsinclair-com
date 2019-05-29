import Link from 'next/link';

import NavBar from './NavBar';

const Masthead = () => (
  <header>
    <h1 className="logotype"><Link href="/"><a>Simon Sinclair</a></Link></h1>
    <NavBar />

    <style jsx>
      {`
        .logotype {}
      `}
    </style>
  </header>
);

export default Masthead;
