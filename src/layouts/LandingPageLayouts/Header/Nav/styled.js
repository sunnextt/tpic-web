import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

export const NavWrap = styled.nav``;
export const Ul = styled.ul`
  display: ${({ collapsed }) => (collapsed === true ? 'column' : 'flex')};
  justify-content: ${({ collapsed }) => (collapsed === true ? 'center' : 'space-between')};
  padding: ${({ collapsed }) => (collapsed === true ? '4rem 0' : 'auto')};

  align-items: center;
  margin: 0;
  list-style: none;
  list-style-type: none;
`;

export const Li = styled.li`
  padding: ${({ collapsed }) => (collapsed === true ? '2rem 0' : '1rem 16px')};
  text-align: ${({ collapsed }) => (collapsed === true ? 'center' : 'auto')};
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
export const FloatingNavWrap = styled.nav`
  display: ${({ collapsed }) => (collapsed === true ? 'block' : 'none')};
  .floating_nav {
    -webkit-transition: all 0.9s;
    -moz-transition: all 0.9s;
    -o-transition: all 0.9s;
    -ms-transition: all 0.9s;
    transition: all 0.9s;
  }
`;
