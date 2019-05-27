import Link from 'next/link';

import Nav from './Nav';

const Masthead = () => (
  <header>
    <h1 className="logotype"><Link href="/"><a>Simon Sinclair</a></Link></h1>
    <Nav />

    <style jsx>
      {`
        .logotype {}
      `}
    </style>
  </header>
);

export default Masthead;
