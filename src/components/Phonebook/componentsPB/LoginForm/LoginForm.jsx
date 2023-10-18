import Input from 'shared/components/input';
import useForm from 'shared/components/useForm/useForm';

import fields from './fields';
import { initiaState } from './initialState';

import styles from './LoginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, sabmitForm } = useForm({
    initiaState,
    onSubmit,
  });

  return (
    <>
      <form onSubmit={sabmitForm}>
        <Input
          value={state.email}
          handleChange={handleChange}
          {...fields.email}
        />
        <Input
          value={state.password}
          handleChange={handleChange}
          {...fields.password}
        />
        <button className={styles.button} type="submit">
          Sabmit
        </button>
      </form>
    </>
  );
};

export default LoginForm;
