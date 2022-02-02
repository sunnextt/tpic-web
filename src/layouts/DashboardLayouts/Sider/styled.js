import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #f5f7f8;
  &:hover {
    color: #f5f7f8;
  }
`;
