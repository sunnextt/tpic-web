import styled from 'styled-components';

const Container = styled.main`

  width: 100%;
  height: 100%;
  background: #F4F4F4;
  box-sizing: border-box;

  .tab_list {
    border-bottom:  2px solid #ccc;


  .custom_typo {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-transform: capitalize;
    margin: 0;
  }

  .react-tabs__tab {
    display: inline-block;
    border: 1px solid transparent;
    border-bottom: none;
    bottom: -1px;
    position: relative;
    list-style: none;
    padding: 6px 3rem 10px 0;
    margin: 0 2rem 0 0 ;
    cursor: pointer;

     @media screen and (max-width: 768px) {
      margin: 0 1rem;
      padding: 6px 0rem 10px 0;
    }
  }

  .react-tabs__tab--selected {
    background: transparent;
    color: red,
    border-radius: 0;
    border-bottom: 4px solid #00A953;

    h4 {
    color: #00a953;
    }
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  align-items: 'center';
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export default Container;
