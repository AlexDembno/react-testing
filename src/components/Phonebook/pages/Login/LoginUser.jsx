import LoginForm from 'components/Phonebook/componentsPB/LoginForm/LoginForm';

const Login = () => {
  const onSubmit = state => {
    console.log('state', state);
  };
  return (
    <>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </>
  );
};

export default Login;
