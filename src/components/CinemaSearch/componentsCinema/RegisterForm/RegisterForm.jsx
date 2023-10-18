import Input from 'shared/components/input';
import useForm from 'shared/components/useForm/useForm';

import fields from './fields';
import { initiaState } from './initialState';

import styles from './RegisterForm.module.css';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, sabmitForm } = useForm({
    initiaState,
    onSubmit,
  });

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={sabmitForm}>
        <Input
          value={state.name}
          handleChange={handleChange}
          {...fields.name}
        />
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

export default RegisterForm;
