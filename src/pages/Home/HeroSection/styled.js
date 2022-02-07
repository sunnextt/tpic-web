import styled from 'styled-components';

const HeroContainer = styled.main`
  background: #f4f4f4;
  padding: 0 8rem;
  width: 100%;
  height: 100%;

  .image_hero {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 960px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 6rem 2rem 4rem;
  }
`;

export const HeroImage = styled.img`
  margin: 1rem;
  width: 100%;
  height: auto;

  @media screen and (max-width: 960px) {
    width: 80%;
  }
`;
export const HeroSripeImg = styled.img`
  position: absolute;
  top: 31%;
  width: 80%;
  height: auto;
  left: 20%;

  @media screen and (max-width: 900px) and (min-width: 600px) {
    display: none;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const HeroContents = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 960px) {
    width: 100%;
  }

  h4 {
    font-family: Lato;
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffb400;
    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
  }

  h3 {
    position: relative;
    font-family: Lato;
    font-size: 62px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: left;
    color: #004221;
    z-index: 1000;
    span {
      font-weight: 800;
    }
    @media screen and (max-width: 1200px) {
      font-size: 40px;
    }
  }

  h6 {
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #282828;
  }

  .contents_btn {
    display: flex;
    align-items: center;
    column-gap: 2rem;
    margin-top: 3rem;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.colorWhite};
  background-color: #ffb400;
  border-radius: 4px;
  padding: 16px 32px;
  border: none;
  transition: 0.3s;

  &:hover,
  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.colors.colorGreenPrimary};
    transition: 0.3s;
  }
`;

export const PlayButton = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #00a953;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    transition: 0.3s;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: space-between;
  & > div,
  & > ul {
    flex: 1;
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
    row-gap: 3rem;
  }
`;

export default HeroContainer;
