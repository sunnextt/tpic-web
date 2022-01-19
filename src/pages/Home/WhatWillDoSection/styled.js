import styled from 'styled-components';

const WWDContainer = styled.main`
  padding: 6rem 8rem;
  width: 100%;
  height: 100%;

  .content_one {
    width: 88%;
    padding: 2rem 0;
    h4 {
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 52px;
      letter-spacing: 0em;
      color: ${({ theme }) => theme.colors.darkColorPrimary};
      text-align: left;
    }

    h6 {
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0em;
      color: ${({ theme }) => theme.colors.darkColorPrimary};
    }
  }
  .content_two {
    position: relative;
    padding: 4rem 2rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background: #fafafa;
    border-radius: 16px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    h4 {
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 52px;
      letter-spacing: 0em;
      text-align: left;
      color: ${({ theme }) => theme.colors.darkColorPrimary};
      margin-bottom: 2rem;
    }

    h6 {
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: ${({ theme }) => theme.colors.darkColorPrimary};
      margin-bottom: 3rem;
    }
  }
`;

export const FrameImg = styled.img`
  background: #00a953;
  padding: 10px;
  border-radius: 50%;
  width: 64px;
  margin-right: 2rem;
`;
export const EcllipseImg1 = styled.img`
  width: 30%;
  position: absolute;
  bottom: 0;
  right: 0;
`;
export const EcllipseImg2 = styled.img`
  width: 20%;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ButtonText = styled.button`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.colorGreenPrimary};
`;

export default WWDContainer;
