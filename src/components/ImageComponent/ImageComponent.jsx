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
        src={image.url}
        alt={image.description}
      />
      <div className="image-subtext-container">
        <h1 className="image-subtext">{image.district}</h1>
      </div>
    </div>
  );
};

export default ImageComponent;
