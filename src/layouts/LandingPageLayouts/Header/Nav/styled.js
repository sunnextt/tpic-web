import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

export const NavWrap = styled.nav``;
export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  list-style: none;
  list-style-type: none;
`;

export const Li = styled.li`
  padding: 1rem 16px;
`;

export const Link = styled(_Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #282828;

  &:hover {
    color: #282828;
    padding: 0 0 1rem 0;
    border-bottom: 4px solid #00a953;
    border-radius: 4px;
    transition: 0.3s;
  }
  text-transform: capitalize;
`;
