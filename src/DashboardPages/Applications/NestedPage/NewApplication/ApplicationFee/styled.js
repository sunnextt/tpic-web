import styled from 'styled-components';

const ApplicationFeeContainer = styled.div`
  width: 100%;

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

  .aligh_item_center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 4rem 0 5rem;
  }
`;

export const CardDiv = styled.div`
  margin: 1rem 0;
  width: 500px;
  h5 {
    font-weight: 600;
    font-size: 13.3232px;
    line-height: 16px;
    text-align: center;
    color: #282828;
  }

  h3 {
    font-weight: 900;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    color: #004221;
  }

  h6 {
    font-weight: 500;
    font-size: 13px;
    line-height: 150%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #717579;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
`;

export default ApplicationFeeContainer;
