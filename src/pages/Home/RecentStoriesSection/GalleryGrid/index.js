import React from 'react';
import GalleryGridContainer, { CardGrid, Button, Img } from './styled';

const GalleryGrid = () => {
  return (
    <GalleryGridContainer>
      <CardGrid>
        <Img
          height="314px"
          src="https://images.pexels.com/photos/4067759/pexels-photo-4067759.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="randon img"
        />
        <div className="btn_gallery">
          <Button>Tech Company</Button>
        </div>
      </CardGrid>
      <CardGrid>
        <Img
          src="https://images.pexels.com/photos/4067759/pexels-photo-4067759.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="randon img"
        />
        <div className="btn_gallery">
          <Button>Agro-Business</Button>
        </div>
      </CardGrid>
      <CardGrid>
        <Img
          height="314px"
          src="https://images.pexels.com/photos/4067759/pexels-photo-4067759.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="randon img"
        />
        <div className="btn_gallery">
          <Button>Fintech</Button>
        </div>
      </CardGrid>
      <CardGrid>
        <Img
          src="https://images.pexels.com/photos/4067759/pexels-photo-4067759.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="randon img"
        />
        <div className="btn_gallery">
          <Button>Education</Button>
        </div>
      </CardGrid>
    </GalleryGridContainer>
  );
};

export default GalleryGrid;
