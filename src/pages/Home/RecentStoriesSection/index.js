import React, { useState } from 'react';
import RSContainer, { CTop, Link } from './styled';
import { BsArrowRight } from 'react-icons/bs';
import GalleryGrid from './GalleryGrid';

const RecentStories = () => {
  const [state, SetState] = useState({ layout: [] });

  function onLayoutChange(layout) {
    SetState({ layout: layout });
  }

  // function stringifyLayout() {
  //   return state.layout.map(function (l) {
  //     return (
  //       <div className="layoutItem" key={l.i}>
  //         <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
  //       </div>
  //     );
  //   });
  // }
  return (
    <RSContainer>
      <CTop>
        <h4>Recent Stories</h4>
        <Link className="link_to_gallery" to="/gallery">
          View Gallery <BsArrowRight size="26" />
        </Link>
      </CTop>
      <GalleryGrid onLayoutChange={onLayoutChange} />
    </RSContainer>
  );
};

export default RecentStories;
