import GalleryGrid from './GalleryGrid';
import GalleryPageContainer from './styled';

const GalleryPage = () => {
  return (
    <GalleryPageContainer>
      <div className="GalleryGrid">
        <h4>Gallery</h4>
      </div>
      <GalleryGrid />
    </GalleryPageContainer>
  );
};

export default GalleryPage;
