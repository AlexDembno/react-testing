import styles from './input.module.css';

const Input = ({ label, ...props }) => {
  return (
    <>
      <div className={styles.container}>
        <input className={styles.input} {...props} />
        <label className={styles.label}>
          <span className={styles.span}>{label}</span>
        </label>
      </div>
    </>
  );
};

export default Input;
