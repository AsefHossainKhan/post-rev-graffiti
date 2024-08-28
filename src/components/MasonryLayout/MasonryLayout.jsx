import Masonry from "react-masonry-css";
import "./MasonryLayout.css";
import ImageComponent from "../ImageComponent/ImageComponent";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
};

const MasonryLayout = ({ images, setSelectedImage }) => (
  <>
    <h1 className="masonry-layout-header">Graffiti Images</h1>
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((image) => (
        <ImageComponent
          key={image.id}
          image={image}
          setSelectedImage={setSelectedImage}
        />
      ))}
    </Masonry>
  </>
);

export default MasonryLayout;
