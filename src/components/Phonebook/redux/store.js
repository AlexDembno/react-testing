import { configureStore } from '@reduxjs/toolkit';

import contactSlice from './contactSlice';
import filterSlice from './filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactSlice,
    filter: filterSlice,
  },
});

export default store;
