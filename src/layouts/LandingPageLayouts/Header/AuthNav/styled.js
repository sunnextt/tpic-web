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

  @media screen and (max-width: 600px) {
    padding: 8px 20px;
  }

  :not(.selected) {
    border: 2px solid #00a953;
    color: #00a953;
  }

  &:hover {
    color: #00a953;
    border: 2px solid #00a953;
    border-radius: 4px;
    transition: 0.3s;
  }
`;

export default AuthNavDiv;
