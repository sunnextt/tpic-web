import React from 'react';
import { GalleryContainer, Img1, Img2, Img3, Img4 } from './styled';
import image1 from '../../../assets/png/Image1.png';
import image2 from '../../../assets/png/Image2.png'
import image3 from '../../../assets/png/Image3.png'
import image4 from '../../../assets/png/Image4.png'

const HomeGallery = () => {
  return (
    <GalleryContainer>
      <div className="gal_one">
        <div className="col_1">
          <Img1 src={image1} alt="gallery1" />
        </div>
        <div className="col_2">
          <Img2 src={image2} alt="gallery1" />
        </div>
      </div>
      <div className="gal_two">
        <div className="col_1">
          <Img3 src={image3} alt="gallery1" />
        </div>
        <div className="col_2">
          <Img4 src={image4} alt="gallery1" />
        </div>
      </div>
    </GalleryContainer>
  );
};

export default HomeGallery;
