import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'shared/services/heroku-API';
import { setToken } from 'shared/services/heroku-API';

export const signup = createAsyncThunk(
  'auth/signup',
  async (user, thunkAPI) => {
    try {
      const response = await instance.post('/users/signup', user);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auht/login', async (user, thunkAPI) => {
  try {
    const response = await instance.post('/users/login', user);
    setToken(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await instance.post('/users/logout');
    console.log('response.data', response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      setToken(auth.token);
      const response = await instance.get('/users/current');
      return response.data;
    } catch ({ response }) {
      setToken();
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
