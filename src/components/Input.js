import styled from 'styled-components';

export const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width === 'fullWidth' ? '100%' : '45%')};
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
