import styled from 'styled-components';

const DocumentsUploadContainer = styled.div`
  padding: 2rem 0;

  .filecontents {
    width: 100%;
    @media screen and (max-width: 960px) {
      width: 100%;
    }
  }

  .pre_next_div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
  }
  .flex_space_btw {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
  }
`;

export default DocumentsUploadContainer;
