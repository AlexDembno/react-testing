import { Navigate, Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { isUserLogin } from 'components/Phonebook/redux/auth/selectors';
import { getAuth } from 'components/Phonebook/redux/auth/selectors';

const PrivatRoutes = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <p>Loading....</p>;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivatRoutes;
