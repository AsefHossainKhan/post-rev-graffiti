import "./ImageModal.css";
import Modal from "react-modal";
import { LazyLoadImage } from "react-lazy-load-image-component";

Modal.setAppElement("#root");
const ImageModal = ({ isOpen, onRequestClose, image }) => (
  <Modal className="modal-root" isOpen={isOpen} onRequestClose={onRequestClose}>
    <div className="modal-container">
      <LazyLoadImage
        className="modal-image"
        src={image.download_url}
        alt={image.author}
      />
      <div className="modal-image-subtext-container">
        <h1 className="modal-image-subtext">Location: Dhaka dhaka dhaka</h1>
      </div>
    </div>
  </Modal>
);

export default ImageModal;
