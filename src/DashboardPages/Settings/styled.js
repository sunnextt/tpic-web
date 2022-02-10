import styled from 'styled-components';

const SettingsContainer = styled.main`
  width: 100%;
`;

export const Form = styled.form`
  width: 60%;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default SettingsContainer;
