import React from 'react';
import RSContainer, { CTop, Link } from './styled';
import { BsArrowRight } from 'react-icons/bs';
import GalleryGrid from './GalleryGrid';

const RecentStories = () => {
  return (
    <RSContainer>
      <CTop>
        <h4>Recent Stories</h4>
        <Link className="link_to_gallery" to="/gallery">
          View Gallery <BsArrowRight size="26" />
        </Link>
      </CTop>
      <GalleryGrid />
    </RSContainer>
  );
};

export default RecentStories;
