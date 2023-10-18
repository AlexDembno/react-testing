import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import styles from './input.module.css';

const Input = ({ handleChange, label, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <>
      <div className={styles.container}>
        <label htmlFor={id} className={styles.label}>
          <span className={styles.span}>{label}</span>
        </label>
        <input
          id={id}
          className={styles.input}
          onChange={handleChange}
          {...props}
        />
      </div>
    </>
  );
};

export default Input;
