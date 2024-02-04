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

export const getCountByType = createAsyncThunk(
  'products/totalByType',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/products/total/types');
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getVinosCount = createAsyncThunk(
  'products/totalVinos',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/products/total/vinos');
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getEspumososCount = createAsyncThunk(
  'products/totalEspumosos',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/products/total/espumosos');
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getDestiladosCount = createAsyncThunk(
  'products/totalDestilados',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/products/total/destilados');
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
