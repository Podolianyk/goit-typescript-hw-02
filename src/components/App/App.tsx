import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { getPhotos, UnsplashPhoto } from "./../../api.js";
import SearchBar from "./../SearchBar/SearchBar.js";
import ImageGallery from "./../ImageGallery/ImageGallery.js";
import Loader from "./../Loader/Loader.js";
import ErrorMessage from "./../ErrorMessage/ErrorMessage.js";
import LoadMoreBtn from "./../LoadMoreBtn/LoadMoreBtn.js";
import ImageModal from "./../ImageModal/ImageModal.js";

const App: React.FC = () => {
  const [images, setImages] = useState<UnsplashPhoto[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [imageOfModal, setImageOfModal] = useState<UnsplashPhoto>(
    {} as UnsplashPhoto
  );

  useEffect(() => {
    if (!query) return;

    async function asyncWrapper() {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, total_pages } = await getPhotos(query, page);
        setImages((prevState) => [...prevState, ...results]);
        setShowBtn(total_pages > page);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    asyncWrapper();
  }, [query, page]);

  const getQuery = (query: string): void => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const onHandleLoadMore = (): void => {
    setPage(page + 1);
  };

  const openModal = (): void => {
    setIsOpen(true);
  };

  const onAfterOpen = (image: UnsplashPhoto): void => {
    setImageOfModal(image);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={getQuery} />
      {isError && <ErrorMessage />}
      <Toaster position="top-center" reverseOrder={false} />
      {images.length > 0 && (
        <ImageGallery
          images={images}
          openModal={openModal}
          onAfterOpen={onAfterOpen}
        />
      )}
      {isLoading && <Loader />}
      {showBtn && (
        <LoadMoreBtn onClick={onHandleLoadMore}>Load more</LoadMoreBtn>
      )}
      {modalIsOpen && (
        <ImageModal
          image={imageOfModal}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      )}
    </div>
  );
};

export default App;
