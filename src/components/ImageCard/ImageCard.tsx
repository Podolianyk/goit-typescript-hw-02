import css from "./ImageCard.module.css";
import { UnsplashPhoto } from "./../../api.js";

interface ImageCardProps {
  image: UnsplashPhoto;
  openModal: () => void;
  onAfterOpen: (value: UnsplashPhoto) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  openModal,
  onAfterOpen,
}) => {
  const handleClick = () => {
    openModal();
    onAfterOpen(image);
  };

  return (
    <div>
      <img
        onClick={handleClick}
        className={css.image_item}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
