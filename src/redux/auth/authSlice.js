import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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
  extraReducers: builder => {},
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
