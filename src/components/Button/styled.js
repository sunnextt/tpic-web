import styled from 'styled-components';

const ButtonWrap = styled.button`
  display: block;
  width: ${({ width }) => (width === 'fullWidth' ? '100%' : `${width}`)};
  background: ${({ color }) => (color === 'primary' ? '#00A953' : '#004221')};
  border-radius: 4px;
  padding: 20px;
  border: none;
  font-family: GT Walsheim Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  cursor: pointer;
  color: ${({ color }) => (color === 'primary' ? '#ffffff' : `#ccc`)};

  &:hover {
    color: #ffffff;
    background-color: #ffb400;
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
`;

export default ButtonWrap;
