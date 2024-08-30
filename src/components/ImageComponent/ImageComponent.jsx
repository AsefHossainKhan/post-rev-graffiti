import { LazyLoadImage } from "react-lazy-load-image-component";
import "./ImageComponent.css";
import ImagePlaceholder from "../../assets/loader2.webp";
import { useState } from "react";
const ImageComponent = ({ image, setSelectedImage }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className={`image-container`} onClick={() => handleImageClick(image)}>
      <LazyLoadImage
        className={`image-item ${isLoaded ? "show" : "hide"}`}
        src={image.url}
        alt={image.description}
        visibleByDefault={true}
        onLoad={() => {
          setIsLoaded(true);
        }}
      />
      <div
        className={`image-subtext-container ${isLoaded ? "show-flex" : "hide"}`}
      >
        <h1 className="image-subtext">{image.district}</h1>
      </div>
      <img
        className={`image-item placeholder ${isLoaded ? "hide" : "show"}`}
        src={ImagePlaceholder}
      ></img>
    </div>
  );
};

export default ImageComponent;
