import styled from 'styled-components';

const HeaderWrap = styled.main`
  width: 100%;
`;

export const AuthProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h6 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.04px;
    color: #ffffff;
    mix-blend-mode: normal;
    margin: 0;
    padding: 0;
  }
`;

export default HeaderWrap;
