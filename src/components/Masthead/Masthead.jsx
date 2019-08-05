import Link from 'next/link';
import styled from 'styled-components';

import NavBar from '../NavBar/NavBar';

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;

  .logo {
    font-style: normal;
    font-weight: 700;
  }
`;

const Masthead = () => (
  <Header className="container">
    <strong className="logo">
      <Link href="/">
        <a>Simon Sinclair</a>
      </Link>
    </strong>

    <NavBar />
  </Header>
);

export default Masthead;
