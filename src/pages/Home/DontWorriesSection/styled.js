import styled from 'styled-components';

const DWSectionContainer = styled.section`
  padding: 2rem 8rem 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.colorGreenPrimary};
  color: ${({ theme }) => theme.colors.colorWhite};

  .section_contents {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h4 {
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0em;
    color: #ffffff;
    text-align: left;
    z-index: 1000;
  }

  h5 {
    font-weight: 600;
    font-size: 32px;
    line-height: 120%;
    display: flex;
    align-items: center;
    color: #ffffff;
    margin-top: 3rem;
  }
`;
export const Img = styled.img`
  width: 340px;
`;
export const ImgStrip = styled.img`
  width: 33%;
  position: absolute;
  /* transform: translate: translate(-50%, -50%); */
  bottom: 29%;
  left: 0;
`;

export default DWSectionContainer;
