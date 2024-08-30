import "./App.css";
import { useState, useEffect, useCallback } from "react";
import MasonryLayout from "./components/MasonryLayout/MasonryLayout";
import images from "./actual_data";
import ImageModal from "./components/ImageModal/ImageModal";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import { PERLOADCOUNT, SCROLLTHRESHOLD } from "./utils";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(
    images.slice(0, PERLOADCOUNT)
  );
  const [imageCount, setImageCount] = useState(PERLOADCOUNT);
  const loadMoreImages = () => {
    console.log("load more images");
    setImageCount((prevCount) => prevCount + PERLOADCOUNT);
  };
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollableHeight = documentHeight - windowHeight;
    const calculatedScrollThreshold = scrollableHeight * SCROLLTHRESHOLD;
    if (scrollTop >= calculatedScrollThreshold) {
      loadMoreImages();
    }
  });
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setVisibleImages(images.slice(0, imageCount));
  }, [imageCount]);

  return (
    <div className="App">
      <div className="main-content">
        <HeaderComponent />
        <MasonryLayout
          images={visibleImages}
          setSelectedImage={setSelectedImage}
        />
        {selectedImage && (
          <ImageModal
            isOpen={Boolean(selectedImage)}
            onRequestClose={() => setSelectedImage(null)}
            image={selectedImage}
          />
        )}
      </div>
    </div>
  );
}

export default App;
