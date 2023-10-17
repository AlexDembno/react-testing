import Input from 'shared/components/input';

import fields from './fields';

import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const sabmitForm = evt => {
    evt.preventDefault();
    const email = evt.currentTarget.elements.email.value;
    const password = evt.currentTarget.elements.password.value;
    const name = evt.currentTarget.elements.name.value;
    console.log(email);
    console.log(password);
    console.log(name);

    // const { name, email, password } = evt.currentTarget.elements;
    // console.log(email.value);
    // console.log(name.value);
    // console.log(password.value);
  };
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={sabmitForm}>
        <Input {...fields.name} />
        <Input {...fields.email} />
        <Input {...fields.password} />
        <button className={styles.button} type="submit">
          Sabmit
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
