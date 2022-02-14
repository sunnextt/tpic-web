import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

const AuthNavDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Link = styled(_Link)`
  color: #282828;
  padding: 8px 24px;
  margin: 0 1rem;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 2px solid #00a953;
  color: #00a953;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  @media screen and (max-width: 600px) {
    padding: 8px 20px;
  }

  :not(.selected) {
    background-color: #00a953;
    border-color: #00a953;
    color: white;
  }

  &:hover {
    background-color: #00a953;
    border-color: #00a953;
    color: white;
    border-radius: 4px;
    transition: 0.3s;
  }
`;

export default AuthNavDiv;
