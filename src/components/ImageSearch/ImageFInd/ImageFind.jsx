import { useState, useEffect } from 'react';

import response from 'shared/services/find-image-API';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

import styles from './ImageFind.module.css';

const ImageFind = () => {
  const [search, setSearch] = useState('');
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [tags, setTags] = useState(null);

  const onSubmit = evt => {
    evt.preventDefault();
    const { value } = evt.currentTarget.elements.name;
    setSearch(value);
    setArticles([]);
    evt.currentTarget.reset();
  };

  useEffect(() => {
    if (search) {
      const fetch = async () => {
        try {
          setLoader(true);
          const { data } = await response(search, page);
          setArticles(prev => [...prev, ...data.hits]);
        } catch (error) {
          console.log(error.message);
        } finally {
          setLoader(false);
        }
      };
      fetch();
    }
  }, [page, search]);

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  const openModal = (largeImageURL, user) => {
    setModal(true);
    setLargeImageURL(largeImageURL);
    setTags(user);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className={styles.app}>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery articles={articles} openModal={openModal} />
      {loader && <Loader />}
      {articles.length && <Button loadMore={loadMore} />}
      {modal && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ImageFind;
