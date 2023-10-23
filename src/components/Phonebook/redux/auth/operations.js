import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'shared/services/heroku-API';

export const signup = createAsyncThunk(
  'auth/signup',
  async (user, thunkAPI) => {
    try {
      console.log('user', user);
      const response = await instance.post('/users/signup', user);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auht/login', async (user, thunkAPI) => {
  try {
    console.log(user);
    const response = await instance.post('/users/login', user);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await instance.post('/users/logout');
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const current = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  try {
    const response = await instance.get('/users/current');
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
