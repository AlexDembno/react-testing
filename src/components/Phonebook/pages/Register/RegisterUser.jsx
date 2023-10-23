import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signup } from 'components/Phonebook/redux/auth/operations';

import { isUserLogin } from 'components/Phonebook/redux/auth/selectors';

import RegisterForm from 'components/Phonebook/componentsPB/RegisterForm/RegisterForm';

const Register = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();
  const onSubmit = state => {
    console.log('register', state);
    dispatch(signup(state));
  };
  if (isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1>Register</h1>
      <RegisterForm onSubmit={onSubmit} />
    </>
  );
};

export default Register;
