import styled from 'styled-components';

const WWNFYContainer = styled.section`
  padding: 6rem 8rem;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 960px) {
    padding: 6rem 2rem;
  }
  @media screen and (max-width: 960px) {
    font-size: 25px;
    line-height: 40px;
  }

  .gallery_cont_headline {
    h4 {
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 54px;
      font-feature-settings: 'liga' off;
      color: #004221;
      text-align: left;
      @media screen and (max-width: 600px) {
        font-size: 26px;
      }
    }

    p {
      font-family: Lato;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 32px;
      color: #282828;
    }
  }

  .gallery_cont_details {
    h6 {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      display: flex;
      align-items: center;
      font-feature-settings: 'liga' off;
      color: #18191f;
      padding: 5px 0;
    }
  }

  .content_icon_div {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: flex-start;
  }
  .gallery_content {
    .icon_social {
      padding: 10px;
      color: #00a953;
      background: rgba(0, 169, 83, 0.1);
      border-radius: 50%;
    }
  }

  .content_btn_div {
    margin: 3rem 0;
  }
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .gal_one {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    .col_1 {
      width: 47%;
    }
    .col_2 {
      position: relative;
      width: 50%;
    }
  }
  .gal_two {
    display: flex;
    gap: 1rem;
    justify-content: space-between;

    .col_1 {
      width: 30%;
    }
    .col_2 {
      width: 70%;
    }
  }
`;

export const Img1 = styled.img`
  width: 100%;
  border-radius: 8px;
  height: auto;
`;
export const Img2 = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 8px;
  height: 80%;
`;
export const Img3 = styled.img`
  width: 100%;
  border-radius: 8px;
  height: auto;
`;
export const Img4 = styled.img`
  width: 100%;
  border-radius: 8px;
  height: auto;
`;

export default WWNFYContainer;
