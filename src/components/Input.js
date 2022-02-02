import styled from 'styled-components';

export const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width === 'fullWidth' ? '100%' : width ? width : '45%')};
`;
export const Label = styled.label`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 13.3232px;
  line-height: 16px;
  color: #282828;
  padding: 0.5rem 0;
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2rem 0;
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

export const StyledTextArea = styled.textarea`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #282828;
  appearance: none;
  background: #ececec;
  border: 0.8327px solid #282828;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  display: block;
  font-family: inherit;
  border: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 1rem;
  outline: none;
  margin-bottom: ${10 / 16}em;
  resize: vertical;
  &:focus,
  &:active {
    border-color: #1e96c8;
    box-shadow: none;
  }
`;

export const TextAreaDiv = styled.div`
  width: 100%;
  padding: 1rem 0;
`;
