import stules from './Button.module.css';

const Button = ({ loadMore }) => {
  return (
    <button onClick={loadMore} className={stules.button}>
      Load more
    </button>
  );
};

export default Button;
