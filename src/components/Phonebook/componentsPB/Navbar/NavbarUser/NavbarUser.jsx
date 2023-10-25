import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from 'components/Phonebook/redux/auth/operations';

import { user } from 'components/Phonebook/redux/auth/selectors';

const NavbarUser = () => {
  const { name } = useSelector(user);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <>
      {name}
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </>
  );
};

export default NavbarUser;
