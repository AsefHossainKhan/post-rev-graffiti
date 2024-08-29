import "./ImageModal.css";
import Modal from "react-modal";
import { LazyLoadImage } from "react-lazy-load-image-component";

Modal.setAppElement("#root");
const ImageModal = ({ isOpen, onRequestClose, image }) => (
  <Modal className="modal-root" isOpen={isOpen} onRequestClose={onRequestClose}>
    <div className="modal-container">
      <LazyLoadImage
        className="modal-image"
        src={image.url}
        alt={image.description}
      />
      <div className="modal-side-container">
        <span className="modal-side-container-location">
          <span className="side-titles">Location: </span>
          {image.location}
        </span>
        <span className="modal-side-container-photo-credit">
          <span className="side-titles">Photo Credit: </span>
          {image.photoCredit}
        </span>
        <span className="modal-side-container-artists">
          <span className="side-titles">Artists: </span>
          {image.artists}
        </span>
        <span className="modal-side-container-description">
          <span className="side-titles">Description: </span>
          {image.description}
        </span>
      </div>
    </div>
  </Modal>
);

export default ImageModal;
