import styled from 'styled-components';

const FooterWrapper = styled.section`
  padding: 0rem 8rem 6rem;
  width: 100%;
  height: 100%;


  @media screen and (max-width: 600px) {
    padding: 0rem 2rem 6rem;
  }

  hr {
    border: none;
    border-top: 3px solid #e5e5e5;
  }
  .divider {
    padding: 6rem 0;
  }
`;

export default FooterWrapper;
