import styled from 'styled-components';

const TableContainer = styled.div`
  width: 100%;
  padding: 2rem 0 0;
  .app_id {
    color: #00a953;
  }
  .pending {
    color: #ffb400;
    background: #fff3e1;
    padding: 8px 20px;
    border-radius: 8px;
    border: none;
    margin-top: 1.5rem;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    text-transform: capitalize;
  }
  .approved {
    color: #00a953;
    background: #deffe7;
    padding: 8px 20px;
    border-radius: 8px;
    border: none;
    margin-top: 1.5rem;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    text-transform: capitalize;
  }
  .rejected {
    color: #ff2e00;
    background: #fde6e1;
    padding: 8px 20px;
    border-radius: 8px;
    border: none;
    margin-top: 1.5rem;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    text-transform: capitalize;
  }
  .review {
    color: #2db3ff;
    background: #e4f5ff;
    padding: 8px 20px;
    border-radius: 8px;
    border: none;
    margin-top: 1.5rem;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    text-transform: capitalize;
  }

  .incomplete {
    color: #717579;
    background: #dddddd;
    padding: 8px 20px;
    border-radius: 8px;
    border: none;
    margin-top: 1.5rem;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    text-transform: capitalize;
  }
  h6 {
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: #717579;
    opacity: 0.8;
    text-align: left;
    margin-bottom: 1rem;
  }

  h5 {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 22px;
    color: #717579;
    text-align: left;
    margin: 0;
    padding: 0;
    text-transform: capitalize;
  }
`;

export default TableContainer;
