import styled from 'styled-components';

const Container = styled.section`
  padding: 6rem 8rem;
  width: 100%;
  height: 100%;
  background: #f9f9fa;
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;

  h4 {
    font-weight: bold;
    font-size: 40px;
    line-height: 130%;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.colorGreenSecondary};
  }

  h6 {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    color: ${({ theme }) => theme.colors.darkColorPrimary};
  }
`;
export const DivContents = styled.div`
  .col_contents {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background: #ffffff;
    box-shadow: 0px 7px 25px rgba(143, 134, 196, 0.03);
    border-radius: 14px;
    padding: 1rem;
  }

  .icon_div {
    margin-right: 1rem;
  }

  .contents_div {
    display: flex;
    flex-direction: column;
  }
  h6 {
    font-size: 21px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    color: ${({ theme }) => theme.colors.darkColorSecondary};
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    color: ${({ theme }) => theme.colors.darkColorSecondary};
  }
`;

export default Container;
