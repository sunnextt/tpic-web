import styled from 'styled-components';

const GalleryGridContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1em;
  flex: 1; ;
`;

export const CardGrid = styled.div`
  width: 23.99%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const Card = styled.div`
  width: 100%;
  height: ${(props) => props.height || '229px'};
  margin-bottom: 2rem;
  background: #dddddd;
  border-radius: 8px;
`;

export const Button = styled.button`
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
