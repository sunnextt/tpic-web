import styled from 'styled-components';

const AppDetailsContainer = styled.div`
  .align_item_center {
    display: flex;
    align-items: center;
    margin: 3rem 0;
  }
  .styled_form {
    display: flex;
    flex-direction: column;
    width: 80%;
    @media screen and (max-width: 960px) {
      width: 100%;
    }
  }

  .application_reason {
    display: flex;
    justify-content: flex-start;
    margin: 0 8px;
    gap: 5rem;
  }

  .pre_next_div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .flex_space_btw {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
  }

  .react-select-container {
    width: 100%;
  }
`;
export default AppDetailsContainer;
