import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://riovino-backend.onrender.com',
});

const setAccessToken = accessToken => {
  if (accessToken) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`);
  }

  return (instance.defaults.headers.common.Authorization = '');
};

export const register = '';

export const login = '';

export const getCurrent = '';

export const logout = '';
