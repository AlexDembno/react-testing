import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from 'components/Phonebook/redux/auth/operations';

import { isUserLogin } from 'components/Phonebook/redux/auth/selectors';

import LoginForm from 'components/Phonebook/componentsPB/LoginForm/LoginForm';

const Login = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();
  const onSubmit = state => {
    console.log('login', state);
    dispatch(login(state));
  };

  if (isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </>
  );
};

export default Login;
