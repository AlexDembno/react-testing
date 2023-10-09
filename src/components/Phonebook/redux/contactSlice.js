import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        state.items = actions.payload;
      })
      .addCase(fetchContacts.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.payload;
      })
      .addCase(addContacts.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(addContacts.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(actions.payload);
      })
      .addCase(addContacts.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.payload;
      })
      .addCase(deleteContacts.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        console.log('actions', actions.payload);
        const index = state.items.findIndex(
          item => item.id === actions.payload.id
        );
        console.log('index', index);
        state.items.splice(index, 1);
      })
      .addCase(deleteContacts.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.payload;
      });
  },
});

export default contactSlice.reducer;

// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
