import styled from 'styled-components';

const ApplicationPageWrap = styled.div`
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
    color: #00a953;
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
    padding: 6px 0;
    margin: 0 7rem 0 0;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      margin: 0 1rem;
    }
  }

  .react-tabs__tab--selected {
    background: transparent;
    border-radius: 0;
    border-bottom: 4px solid #00A953;
  }

`;

export default ApplicationPageWrap;
