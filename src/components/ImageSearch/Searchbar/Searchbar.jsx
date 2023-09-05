import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="name"
        />

        <button type="submit" className={styles.button}>
          <span className={styles.buttonlabel}>Search</span>
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
