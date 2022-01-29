import styled from 'styled-components';
import image from 'assets/png/maskcoilimg.png';

import { Link as _Link } from 'react-router-dom';

const RegisterContainer = styled.main`
  .align_item_center {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem 0;
  }
  .styled_form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h5 {
      font-style: normal;
      font-weight: bold;
      font-size: 27px;
      line-height: 32px;
      text-align: center;
      color: #004221;
    }
  }
  .side_column {
    background-color: #00a953;
    background: #00a953;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: auto;
    background-size: cover;
    position: relative;
  }

  .form_container {
    background: #ffffff;
    border-radius: 8px;
    padding: 2rem;

    h4 {
      font-style: normal;
      font-weight: bold;
      font-size: 27px;
      line-height: 32px;
      text-align: center;
      color: #004221;
    }
  }
`;

export const LinkToSignin = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0px;

  h6 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 13.3232px;
    line-height: 16px;
    color: #03014c;
    width: 50%;
    padding: 0 2rem;
  }
`;
export const SideImageCon = styled.div`
  background: #00a953;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BackHomeLinkDiv = styled.div`
  position: absolute;
  bottom: 80px;
  left: 60px;

  a {
    color: #ffffff;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    &:hover {
      color: #ffb400;
      transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
    }
  }
`;
export const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;
export const Label = styled.label`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 13.3232px;
  line-height: 16px;
  color: #282828;
  padding: .5rem 0;
`;

export const Img1 = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 35%;
  left: 30%;
  width: 40%;
  height: auto;
`;
export const Img2 = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  right: -10%;
  width: 35%;
  height: auto;
`;
export const Img = styled.img`
  width: 30%;
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2rem 2rem 4rem;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Input = styled.input`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-weight: 600;
  font-size: 13.3232px;
  line-height: 16px;
  background: #ffffff;
  opacity: 0.3;
  border: 0.8327px solid #282828;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px;
  color: #282828;

  &::placeholder {
    font-size: 13.3232px;
    line-height: 16px;
    color: #282828;
    opacity: 0.6;
  }
`;

export const CheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
`;
export const BtnDiv = styled.div`
  padding: 1rem 2rem;
  width: 50%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Link = styled(_Link)``;

export default RegisterContainer;
