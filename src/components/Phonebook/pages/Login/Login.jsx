import Input from 'shared/components/input';

import styles from './Login.module.css';

const Login = () => {
  const sabmitForm = evt => {
    evt.preventDefault();
    // const email = evt.currentTarget.elements.email.value;
    // const password = evt.currentTarget.elements.password.value;
    const email = evt.currentTarget.elements;
    const password = evt.currentTarget.elements.password.value;
    console.log(email);
    console.log(password);
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={sabmitForm}>
        <Input type={'email'} name={'email'} label={'Email'} />
        <Input type={'password'} name={'password'} label={'Password'} />
        <button className={styles.button} type="submit">
          Sabmit
        </button>
      </form>
    </>
  );
};

export default Login;
