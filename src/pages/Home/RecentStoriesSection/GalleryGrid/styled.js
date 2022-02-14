import styled from 'styled-components';

const GalleryGridContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
  flex: 1;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }

  .btn_gallery {
    padding: 1rem 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  /* height: auto; */
  height: ${(props) => props.height || '229px'};

  @media screen and (max-width: 600px) {
    height: auto;
  }
`;

export const CardGrid = styled.div`
  width: 23.99%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
  @media screen and (max-width: 900px) and (min-width: 600px) {
    width: 32%;
  }
`;
// export const Card = styled.div`
//   width: 100%;
//   height: ${(props) => props.height || '229px'};
//   margin-bottom: 2rem;
//   background: #dddddd;
//   border-radius: 8px;
//   @media screen and (max-width: 600px) {
//     height: auto;
//   }
// `;

export const Button = styled.button`
  display: inline-block;
  background: #d6e4dd;
  border-radius: 8px;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #00a953;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
`;

export default GalleryGridContainer;
