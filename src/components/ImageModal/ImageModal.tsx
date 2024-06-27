import Modal, { Styles } from "react-modal";
Modal.setAppElement("#root");

import css from "./ImageModal.module.css";
import { UnsplashPhoto } from "../../api";

const customStyles: Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#0b0b0bd2",
  },
};

interface ImageModalProps {
  image: UnsplashPhoto;
  closeModal: () => void;
  modalIsOpen: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
  image,
  closeModal,
  modalIsOpen,
}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          width={"800px"}
        />
        <ul className={css.list}>
          <li>{image.description}</li>
          <li>Likes: {image.likes}</li>
          <li>User: {image.user.username}</li>
        </ul>
      </Modal>
    </div>
  );
};

export default ImageModal;
