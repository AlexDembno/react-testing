import RegisterForm from 'components/Phonebook/componentsPB/RegisterForm/RegisterForm';

import styles from './RegisterUser.module.css';

const Register = () => {
  const onSubmit = state => {
    console.log('state', state);
  };
  return (
    <>
      <h1>Register</h1>
      <RegisterForm onSubmit={onSubmit} />
    </>
  );
};

export default Register;
