import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getCurrent, login, logout, register } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  user: {},
  rioAccessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // PENDING
      .addCase(register.pending, handlePending)
      .addCase(login.pending, handlePending)
      .addCase(logout.pending, handlePending)
      .addCase(getCurrent.pending, handlePending)
      // REJECTED
      .addCase(register.rejected, handleRejected)
      .addCase(login.rejected, handleRejected)
      .addCase(getCurrent.rejected, state => {
        state.isRefreshing = false;
      })
      // FULFILLED
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.rioAccessToken = payload.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.rioAccessToken = payload.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.user = {};
        state.rioAccessToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCurrent.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.rioAccessToken = payload.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      });
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['rioAccessToken'],
};

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
