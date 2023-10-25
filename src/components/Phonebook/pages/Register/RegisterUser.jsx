import { useDispatch } from 'react-redux';
import { signup } from 'components/Phonebook/redux/auth/operations';

import RegisterForm from 'components/Phonebook/componentsPB/RegisterForm/RegisterForm';

const Register = () => {
  const dispatch = useDispatch();
  const onSubmit = state => {
    dispatch(signup(state));
  };

  return (
    <>
      <h1>Register</h1>
      <RegisterForm onSubmit={onSubmit} />
    </>
  );
};

export default Register;
