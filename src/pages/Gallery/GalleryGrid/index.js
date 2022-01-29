import React from 'react';
import GalleryGridContainer, { CardGrid, Button, Card } from './styled';

const GalleryGrid = () => {
  return (
    <GalleryGridContainer>
      <CardGrid>
        <Card height="314px">image1</Card>
        <div>
          <Button>Tech Company</Button>
        </div>
      </CardGrid>
      <CardGrid>
        <Card>image1</Card>
        <div>
          <Button>Agro-Business</Button>
        </div>
      </CardGrid>
      <CardGrid>
        <Card height="314px">image1</Card>
        <div>
          <Button>Fintech</Button>
        </div>
      </CardGrid>
      <CardGrid>
        <Card>image1</Card>
        <div>
          <Button>Education</Button>
        </div>
      </CardGrid>
    </GalleryGridContainer>
  );
};

export default GalleryGrid;
