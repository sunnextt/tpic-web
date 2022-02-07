import styled from 'styled-components';

import { Link as _Link } from 'react-router-dom';

const RSContainer = styled.section`
  padding: 6rem 8rem;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 960px) {
    padding: 6rem 2rem;
  }
`;

export const CTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h4 {
    font-weight: bold;
    font-size: 40px;
    line-height: 130%;
    color: #004221;

    @media screen and (max-width: 600px) {
      font-size: 26px;
    }
  }
`;

export const Link = styled(_Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  color: ${(props) => props.theme.colors.colorGreenPrimary};

  &:hover {
    color: ${(props) => props.theme.colors.colorGreenPrimary};
    transition: all 0.3;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.colors.colorGreenPrimary};
    border-radius: 10px;
  }
`;

export default RSContainer;
