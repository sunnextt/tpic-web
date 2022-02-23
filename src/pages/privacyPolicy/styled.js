import styled from 'styled-components';

const TermsContainer = styled.div`
  a {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 120%;
  }
  h3 {
    font-size: 1.6rem;
    text-align: left;
    font-weight: bold;
    line-height: 40px;
    text-align: center;
  }

  h5 {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 120%;
    color: #282828;
  }
  h6 {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 120%;
    color: #282828;
  }

  p {
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    color: #282828;
    font-size: 1.2em;
    line-height: calc(1ex / 0.32);
    margin: calc(1ex / 0.32) 0;
  }

  ul {
    margin-left: 2rem;
  }

  li {
  }
`;

export default TermsContainer;
