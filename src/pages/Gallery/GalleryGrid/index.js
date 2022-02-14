import React from 'react';
import GalleryGridContainer, { CardGrid, Button, Img } from './styled';

const GalleryGrid = () => {
  return (
    <GalleryGridContainer>
      <CardGrid>
        <Img
          height="314px"
          src="https://images.pexels.com/photos/2157885/pexels-photo-2157885.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="randon img"
        />
        <div className="btn_gallery">
          <Button>Tech Company</Button>
        </div>
      </CardGrid>
      <CardGrid>
        <Img
          src="https://images.pexels.com/photos/1234853/pexels-photo-1234853.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="randon img"
        />
        <div className="btn_gallery">
          <Button>Agro-Business</Button>
        </div>
      </CardGrid>
      <CardGrid>
        <Img
          height="314px"
          src="https://images.pexels.com/photos/278664/pexels-photo-278664.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="randon img"
        />
        <div className="btn_gallery">
          <Button>Fintech</Button>
        </div>
      </CardGrid>
      <CardGrid>
        <Img
          src="https://images.pexels.com/photos/2158562/pexels-photo-2158562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
