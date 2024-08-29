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
        alt={image.author}
      />
      <div className="modal-side-container">
        <span className="modal-side-container-location">
          <span className="side-titles">Location:</span> Lorem Ipsum
        </span>
        <span className="modal-side-container-photo-credit">
          <span className="side-titles">Photo Credit:</span> Lorem Ipsum
        </span>
        <span className="modal-side-container-artists">
          <span className="side-titles">Artists:</span> Lorem Ipsum, Lorem Ipsum
        </span>
        <span className="modal-side-container-description">
          <span className="side-titles">Description:</span> Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Ad voluptatibus iure quisquam
          eligendi alias quo neque maiores vel vitae unde consequatur illum
          magnam necessitatibus repudiandae voluptates ducimus, totam doloribus
          cumque?
        </span>
      </div>
    </div>
  </Modal>
);

export default ImageModal;
