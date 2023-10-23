import { useSelector } from 'react-redux';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import { isUserLogin } from 'components/Phonebook/redux/auth/selectors';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <header>
      <nav>
        <NavbarMenu />
        {isLogin ? <NavbarUser /> : <NavbarAuth />}
      </nav>
    </header>
  );
};

export default Navbar;
