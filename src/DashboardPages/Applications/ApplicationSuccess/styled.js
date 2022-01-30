import styled from 'styled-components';

const AppSuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0 0;
  height: 100%;

  .card_contents {
    width: 72%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 1rem;
  }
  h4 {
    font-weight: bold;
    font-size: 27px;
    line-height: 32px;
    color: #ffffff;
  }

  h6 {
    font-weight: 500;
    font-size: 15px;
    line-height: 150%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
`;

export default AppSuccessContainer;
