import { useEffect } from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalEl = document.querySelector('#modal');

const Modal = ({ largeImageURL, tags, closeModal }) => {
  const closeHandleModal = ({ currentTarget, target, key }) => {
    if (currentTarget === target || key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeHandleModal);
    return () => document.removeEventListener('keydown', closeHandleModal);
  }, [closeHandleModal]);

  return createPortal(
    <div className={styles.overlay} onClick={closeHandleModal}>
      <div className={styles.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>,
    modalEl
  );
};

export default Modal;
