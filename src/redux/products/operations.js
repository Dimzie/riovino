import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://riovino-backend.onrender.com',
});

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (subType, thunkAPI) => {
    try {
      if (!subType) {
        const response = await instance.get('/products');
        console.log('response.data', response.data);
        return response.data;
      } else {
        const response = await instance.get(`/products?subType=${subType}`);
        console.log('response.data', response.data);
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
