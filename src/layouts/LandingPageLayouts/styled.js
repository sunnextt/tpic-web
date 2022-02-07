import { Layout as _Layout } from 'antd';
import styled from 'styled-components';

const Layout = styled(_Layout)`
  background-color: #f4f4f4;
  background: #f4f4f4;
  height: 100%;
`;

export const ContentContent = styled.main`
  width: 100%;
  height: 100%;
  margin: 8rem 0 2rem;
  height: auto;

  @media screen and (max-width: 320px) {
    margin: 10rem 0rem 10rem;
  }

  @media screen and (max-width: 600px) {
    margin: 10rem 0rem 10rem;
  }

  @media screen and (max-width: 768px) and (min-width: 408px) {
    margin: 6rem 0rem 10rem;
  }

  @media screen and (max-width: 900px) and (min-width: 768px) {
    margin: 10rem 0rem 10rem;
  }
`;
export default Layout;
