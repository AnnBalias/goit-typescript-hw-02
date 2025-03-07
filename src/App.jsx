import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
// import components
import SearchBar from './components/SearchBar/SearchBar';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImages } from "./services/unsplash.js"
// import styles
import './App.css'

const App = () => {
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const [imgs, setImgs] = useState([]);
  const [selectImg, setSelectImg] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [modalOpn, setModalOpn] = useState(false);

  

  useEffect(() => {
    if (!search) return;
    
    const getImgs = async () => {
      try {
        setLoad(true);
        setError(false);
        const results = await fetchImages(search, page);
        setImgs((prevImgs) =>
          page === 1 ? results : [...prevImgs, ...results]
        )
                
        if (results.length === 0) {
          toast.error("No results, sorry");
          return
        }
      } catch {
        setError(true);
      } finally {
        setLoad(false);
      }
    }
    getImgs();
  }, [search, page]);

  const handSub = (searchInp) => {
    setSearch(searchInp);
    setPage(1);
    setImgs([]);
  };

  const handModal = (img) => {
    setSelectImg(img)
    setModalOpn(true)
  };

  const closeModal = () => {
    setSelectImg(null)
    setModalOpn(false)
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <SearchBar handSub={handSub} />
      {error ? <ErrorMessage /> : <ImageGallery imgs={imgs} handModal={handModal} />}
      {imgs.length > 0 && !error && <LoadMoreBtn loadMore={loadMore} />}
      {load && <Loader />}
      <Toaster />
      <ImageModal modalOpn={modalOpn} handClose={closeModal} selectImg={selectImg} />
    </>
  );
};

export default App;
