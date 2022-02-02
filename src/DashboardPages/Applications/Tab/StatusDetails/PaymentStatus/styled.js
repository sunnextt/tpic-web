import styled from 'styled-components';

const PaymentStatusContainer = styled.div`
  .divider {
    border-left: 4px solid #dddddd;
    height: 240px;
    position: absolute;
    top: 20px;
    left: 50%;
    margin-left: -3px;
  }
  .header {
    font-weight: 600;
    font-size: 13.3232px;
    line-height: 16px;
    color: #282828;
  }
  .fee_amount {
    font-weight: 900;
    font-size: 34px;
    line-height: 41px;
    color: #004221;
    padding: 1rem 0;
  }
  .fee_content {
    font-weight: 500;
    font-size: 13px;
    line-height: 150%;
    color: #717579;

    .contactus_link {
      border: none;
      background-color: transparent;
      cursor: pointer;
      font-weight: 500;
      font-size: 13px;
      line-height: 150%;
      display: flex;
      align-items: center;
      color: red;
      padding: 0;
      margin: 0;

      &:hover {
        color: #ffb400;
        transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
      }
    }
  }
`;
export const ApplicationFeeDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0;
`;
export const FundDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0;
`;

export default PaymentStatusContainer;
