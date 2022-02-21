import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';
const ButtonWrap = styled.button`
  display: block;
  width: ${({ width }) => (width === 'fullWidth' ? '100%' : `${width}`)};
  background: ${({ color }) => (color === 'primary' ? '#00A953' : '#FFB400')};
  border-radius: ${({ radius }) => (radius ? radius : '4px')};
  padding: ${({ padding }) => (padding ? padding : '20px')};
  border: none;
  font-family: GT Walsheim Pro;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '18px')};
  height: ${({ height }) => height && height};
  cursor: pointer;
  color: ${({ color }) => (color === 'primary' ? '#ffffff' : `#ffffff`)};

  &:hover {
    background-color: #00a953;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
    text-shadow: nthree;
  }
  &:active {
    color: white;
    transform: scale(0.9);
    background-color: #ffb400;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
    text-shadow: nthree;
  }
  &:disabled {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const LinkButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '17.9886px')};
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #00a953;

  &:hover {
    color: #ffb400;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  }
`;
export const LinkDot = styled(_Link)`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '17.9886px')};
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #00a953;

  &:hover {
    color: #ffb400;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  }
`;

export const StatusButton = styled.button`
  color: ${({ color }) =>
    color === 'success' ? '#00A953' : color === 'pending' ? '#FFB400' : color === 'review' ? '#2DB3FF' : '#FF2E00'};
  background: ${({ color }) =>
    color === 'success' ? '#DEFFE7' : color === 'pending' ? '#FFF3E1' : color === 'review' ? '#E4F5FF' : '#FDE6E1'};
  padding: 10px 26px;
  border-radius: 8px;
  border: none;
  margin-top: 1.5rem;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    color: #ffb400;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  }
`;

export default ButtonWrap;
