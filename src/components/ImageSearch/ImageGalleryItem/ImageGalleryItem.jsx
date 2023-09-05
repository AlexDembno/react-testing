import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ articles, openModal }) => {
  const result = articles.map(({ id, webformatURL, largeImageURL, user }) => (
    <li key={id} className={styles.imageGalleryItem}>
      <img
        onClick={() => openModal(largeImageURL, user)}
        className={styles.imageGalleryItemimage}
        src={webformatURL}
        alt={user}
      />
    </li>
  ));
  return <>{result}</>;
};

export default ImageGalleryItem;
