import css from "./ImageGallery.module.css";
import ImageCard from "./../ImageCard/ImageCard";
import { UnsplashPhoto } from "./../../api.js";

interface ImageGalleryProps {
  images: UnsplashPhoto[];
  openModal: () => void;
  onAfterOpen: (value: UnsplashPhoto) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  openModal,
  onAfterOpen,
}) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li className={css.list_item} key={image.id}>
          <ImageCard
            image={image}
            openModal={openModal}
            onAfterOpen={onAfterOpen}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
