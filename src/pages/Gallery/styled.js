import styled from 'styled-components';

const GalleryPageContainer = styled.main`
  padding: 4rem 8rem;
  width: 100%;
  height: 100%;

  .GalleryGrid {
    margin-bottom: 3rem;
    h4 {
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 130%;
      color: #004221;
      text-align: left;
    }
  }

  @media screen and (max-width: 960px) {
    padding: 4rem 2rem;
  }
`;

export default GalleryPageContainer;
