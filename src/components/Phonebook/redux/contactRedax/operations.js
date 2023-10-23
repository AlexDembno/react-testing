import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'shared/services/heroku-API';

export const fetchContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/contacts');
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/add',
  async (contact, thunkAPI) => {
    console.log('contact', contact);
    try {
      const response = await instance.post('/contacts', contact);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      const response = await instance.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
