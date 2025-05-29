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

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await instance.post('/auth/register', {
        name,
        email,
        password,
      });
      setAccessToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await instance.post('/auth/login', { email, password });
      setAccessToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrent = createAsyncThunk(
  'auth/getCurrent',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.rioAccessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAccessToken(persistedToken);
      const response = await instance.get('/auth/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await instance.post('/auth/logout');
    setAccessToken();
  } catch (error) {
    if (error.response.status === 401) {
      setAccessToken();
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addToUserCart = createAsyncThunk(
  'auth/addCart',
  async ({ product, quantity }, thunkAPI) => {
    try {
      const response = await instance.patch('/auth/cart', {
        product,
        quantity,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserCartItemQuantity = createAsyncThunk(
  'auth/updateCartItemQuantity',
  async ({ id, quantity }, thunkAPI) => {
    try {
      const response = await instance.patch(`auth/cart/${id}`, { quantity });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFromUserCart = createAsyncThunk(
  'auth/removeFromCart',
  async (id, thunkAPI) => {
    try {
      const response = await instance.patch(`/auth/cart/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
