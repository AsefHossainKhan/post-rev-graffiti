import { LazyLoadImage } from "react-lazy-load-image-component";
import "./ImageComponent.css";
const ImageComponent = ({ image, setSelectedImage }) => {
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="image-container" onClick={() => handleImageClick(image)}>
      <LazyLoadImage
        className="image-item"
        src={image.download_url}
        alt={image.author}
      />
    </div>
  );
};

export default ImageComponent;
