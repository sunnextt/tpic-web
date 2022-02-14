import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 3rem 8rem 1rem;
  margin: 0;
  background: #ffffff;
  width: 100%;
  position: Fixed;
  top: 0;
  z-index: 1000000;

  @media screen and (max-width: 600px) {
    padding: 3rem 2rem 1rem;
  }

  .trigger {
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
    position: absolute;
    right: 30px;
    top: 40px;
    font-size: 35px;

    @media screen and (max-width: 600px) {
      font-size: 20px;
      right: 7px;
      top: 45px
    }
  }

  .trigger:hover {
    color: #00a953;
  }
`;

export default HeaderContainer;
