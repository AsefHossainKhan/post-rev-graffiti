import "./App.css";
import { useState } from "react";
import MasonryLayout from "./components/MasonryLayout/MasonryLayout";
import images2 from "./data2";
import images from "./data";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <MasonryLayout images={images} setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <ImageModal
          isOpen={Boolean(selectedImage)}
          onRequestClose={() => setSelectedImage(null)}
          image={selectedImage}
        />
      )}
    </>
  );
}

export default App;
