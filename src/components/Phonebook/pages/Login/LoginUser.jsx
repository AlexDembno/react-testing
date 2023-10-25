import { useDispatch } from 'react-redux';

import { login } from 'components/Phonebook/redux/auth/operations';

import LoginForm from 'components/Phonebook/componentsPB/LoginForm/LoginForm';

const Login = () => {
  const dispatch = useDispatch();
  const onSubmit = state => {
    dispatch(login(state));
  };

  return (
    <>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </>
  );
};

export default Login;
