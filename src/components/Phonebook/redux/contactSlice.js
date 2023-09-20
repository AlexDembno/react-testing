import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  ],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContacts: (state, actions) =>
      state.filter(el => el.id !== actions.payload),
  },
});

export const { addContact, deleteContacts } = contactSlice.actions;

export default contactSlice.reducer;
