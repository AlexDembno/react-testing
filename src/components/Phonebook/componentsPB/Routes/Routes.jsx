import { Routes, Route } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import PrivatRoutes from '../PrivatRoutes/PrivatRoutes';
import PublicRoute from '../PublicRoutes/PublicRoutes';
import PhoneBook from 'components/Phonebook/pages/Main/Main';
import Register from 'components/Phonebook/pages/Register/RegisterUser';
import Login from 'components/Phonebook/pages/Login/LoginUser';

const PhoneBookRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<PrivatRoutes />}>
          <Route path="/phonebook" element={<PhoneBook />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default PhoneBookRoutes;
