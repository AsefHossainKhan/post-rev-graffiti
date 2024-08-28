import Masonry from "react-masonry-css";
import "./MasonryLayout.css";
import ImageComponent from "../ImageComponent/ImageComponent";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
};

const MasonryLayout = ({ images, setSelectedImage }) => (
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
);

export default MasonryLayout;
