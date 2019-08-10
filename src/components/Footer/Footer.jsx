import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: 3rem;
  padding-bottom: 1.5rem;
`;

const Footer = () => (
  <StyledFooter className="container">
    <p>
      <small>
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Simon Sinclair.
      </small>
    </p>
  </StyledFooter>
);


export default Footer;
