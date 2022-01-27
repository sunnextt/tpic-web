import styled from 'styled-components';
import StyleButton from 'components/Button';
import { Row as _Row } from 'antd';

const CUContainer = styled.main`
  padding: 6rem 8rem;
  width: 100%;
  height: 100%;
`;

export const Row = styled(_Row)`
  background: #ffffff;
  border-radius: 8px;
`;

export const ContactuHeadling = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10rem 2rem;
  h4 {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 130%;
    color: #004221;
    text-align: left;
  }
`;
export const ContactUsContentDiv = styled.div`
  width: 100%;

  h5 {
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 41px;
    color: #06040a;
    margin: 4rem 0;
  }
`;

const black = 'rgba(74,74,74,0.94)';

export const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;
export const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  color: #544e5d;
`;

export const StyledTextArea = styled.textarea`
  appearance: none;
  background: #ffffff;
  width: 91%;
  display: block;
  font-family: inherit;
  font-weight: 300;
  font-size: 1em;
  color: ${black};
  border: none;
  border-bottom: 3px solid #00a953;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 1rem 0;
  outline: none;
  margin-bottom: ${10 / 16}em;
  resize: vertical;
  &:focus,
  &:active {
    border-color: #1e96c8;
    box-shadow: none;
  }
`;

export const Input = styled.input`
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  appearance: none;
  background: transparent;
  width: 80%;
  font-family: inherit;
  border: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding-bottom: 1em;
  padding-top: 0.5em;
  outline: none;
  border-bottom: 1px solid #ebe5db;
  margin-bottom: ${10 / 16}em;
  background: transparent;
  &:focus,
  &:active {
    border-color: #1e96c8;
    box-shadow: none;
  }

  &::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    color: #06040a;
    opacity: 0.5;
  }
`;

export const TextAreaDiv = styled.div`
  width: 100%;
  padding: 3rem 0;
`;
export const Form = styled.form`
  width: 100%;
`;
export const FormInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const CheckboxBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  margin-bottom: 4rem;
`;

export const Button = styled(StyleButton)``;

export default CUContainer;
