import { configureStore } from '@reduxjs/toolkit';

import contactSlice from './contactRedax/contactSlice';
import filterSlice from './contactRedax/filterSlice';
import authSlice from './auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    contacts: contactSlice,
    filter: filterSlice,
  },
});

export default store;
