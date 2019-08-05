import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: 3rem;
  padding-bottom: 1.5rem;
`;

const Footer = ({ date }) => (
  <StyledFooter className="container">
    <p>
      <small>
        &copy;
        {' '}
        {date.getFullYear()}
        {' '}
        Simon Sinclair.
      </small>
    </p>
  </StyledFooter>
);

Footer.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Footer;
