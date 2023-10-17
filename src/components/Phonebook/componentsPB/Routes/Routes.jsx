import { Routes, Route } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

import PhoneBook from 'components/Phonebook/pages/Main/Main';
import Register from 'components/Phonebook/pages/Register/RegisterUser';
import Login from 'components/Phonebook/pages/Login/Login';

const PhoneBookRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PhoneBook />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default PhoneBookRoutes;
