import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import { fetchImgs } from './services/api';
import ImageGallary from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import '../styles.css';

export default function App() {
  const [imgs, setImgs] = useState([]);
  const [totalImgs, setTotalImgs] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [largeImageURL, setLargeImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setIsLoading(true);
    fetchImgs(query, page)
      .then(data => {
        if (data.hits.length === 0) {
          return toast.error('Nothing was found on your request');
        }
        setTotalImgs(data.totalHits);
        setImgs(prevImgs => [...prevImgs, ...data.hits]);
      })
      .finally(setIsLoading(false));
  }, [query, page]);

  const onLoadMore = () => {
      setPage(prevPage => prevPage + 1)
  };

  const onSubmit = searchValue => {
    setQuery(searchValue);
    setPage(1);
    setImgs([]);
    setIsLoading(false)
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const getlargeImageURL = largeImageURL => {
    setLargeImageURL(largeImageURL);
  };

  return (
    <div className="app">
      {showModal && <Modal imgUrl={largeImageURL} toggleModal={toggleModal} />}
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <Loader />}
      {imgs.length > 0 ? (
        <>
          <ImageGallary
            imgs={imgs}
            toggleModal={toggleModal}
            onClick={getlargeImageURL}
          />
          {imgs.length !== totalImgs && <Button onClick={onLoadMore} />}
        </>
      ) : null}
    </div>
  );
}
