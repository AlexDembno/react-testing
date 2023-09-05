import styles from './ImageGallery.module.css';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ articles, openModal }) => {
  return (
    <ul className={styles.imageGallery}>
      <ImageGalleryItem articles={articles} openModal={openModal} />
    </ul>
  );
};

export default ImageGallery;
