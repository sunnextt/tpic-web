import styled from 'styled-components';
import image from '../../../../assets/png/coilimg.png';

const NewsLetterWrapper = styled.div`
  padding-bottom: 3rem;

  @media screen and (max-width: 600px) {
    padding: 0 2rem;
  }

  .error-danger {
    color: #dc3545 !important;
    font-size: 16px;
    line-height: 1.5em;
    margin: 0;
    padding: 0;
  }

  background-color: #00a953;
  background: #00a953;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: auto;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h5 {
    font-family: Lato;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: center;
    color: ${({ theme }) => theme.colors.colorWhite};
  }

  .Subscribe {
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;
    background-color: transparent;
    width: 100%;

    @media screen and (max-width: 600px) {
    }
  }

  .Subscribe::after {
    content: '';
    z-index: 1;
    position: absolute;
    transform: rotate(-5deg);
    transition: transform 1s cubic-bezier(0.2, 0, 0, 1);
  }
`;

export const Form = styled.form`
  z-index: 2;
  bottom: 25px;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  background: transparent;
  box-shadow: 0 3px 6px 0 rgba(149, 144, 179, 0.2);
  transition: transform 600ms cubic-bezier(0.2, 0, 0, 1);

  &::after {
    top: 0;
    content: '';
    width: 30px;
    right: 110px;
    position: absolute;
    background: linear-gradient(90deg, rgba(white, 0), rgba(white, 1));
  }
`;
export const Input = styled.input`
  font-size: 16px;
  padding: 10px 16px;
  width: 100%;
  border: none;
  border-radius: 5px;
  color: #e5e5e5;
  background-color: transparent;
  border-bottom: 1px solid #ffffff;

  &::placeholder {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #e5e5e5;
=    opacity: 0.8;
  }
`;
export const Button = styled.button`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #f9f9fa;
  bottom: 10px;
  right: 5%;
  padding: 0;
  cursor: pointer;
  outline: none;
  border: none;
  position: absolute;
  background-color: transparent;
  transition: color 500ms;
`;

export const NewsHeader = styled.div`
  width: 50%;
  margin: 2rem 0;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default NewsLetterWrapper;
