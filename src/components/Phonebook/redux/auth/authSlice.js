import { createSlice } from '@reduxjs/toolkit';

import { signup, login, logout, current } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: '',
    isLogin: false,
    loading: false,
    error: null,
  },
  extraReducers: bilder => {
    bilder
      .addCase(signup.pending, (state, actions) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, actions) => {
        const { user, token } = actions.payload;
        state.loading = false;
        state.error = null;
        state.user = user;
        state.token = token;
        state.isLogin = true;
      })
      .addCase(signup.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      })
      .addCase(login.pending, (state, actions) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, actions) => {
        const { user, token } = actions.payload;
        state.loading = false;
        state.error = null;
        state.isLogin = true;
        state.user = user;
        state.token = token;
      })
      .addCase(login.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      })
      .addCase(logout.pending, (state, actions) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, actions) => {
        state.loading = false;
        state.error = null;
        state.isLogin = true;
        state.user = {};
      })
      .addCase(logout.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      })
      .addCase(current.pending, (state, actions) => {
        state.loading = true;
      })
      .addCase(current.fulfilled, (state, actions) => {
        state.loading = false;
        state.error = null;
        state.user = actions.payload;
      })
      .addCase(current.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      });
  },
});

export default authSlice.reducer;
