import { useSelector } from 'react-redux';

import { user } from 'components/Phonebook/redux/auth/selectors';

const NavbarUser = () => {
  const { name } = useSelector(user);

  return (
    <>
      {name} <button>Logout</button>
    </>
  );
};

export default NavbarUser;
