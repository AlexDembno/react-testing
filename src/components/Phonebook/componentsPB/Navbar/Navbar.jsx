import { NavLink } from 'react-router-dom';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavbarMenu />
        <NavbarAuth />
      </nav>
    </header>
  );
};

export default Navbar;
