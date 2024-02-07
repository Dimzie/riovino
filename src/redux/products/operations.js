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

export const getProductById = createAsyncThunk(
  'products/getProductById',
  async (id, thunkAPI) => {
    try {
      const response = await instance.get(`/products/${id}`);
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (
    { image, title, type, subType, alcohol, price, region, capacity, discount },
    thunkAPI
  ) => {
    try {
      const formData = new FormData();
      if (image) {
        formData.append('image', image);
      }
      formData.append('title', title);
      formData.append('type', type);
      formData.append('subType', subType);
      formData.append('alcohol', alcohol);
      formData.append('price', price);
      formData.append('region', region);
      formData.append('capacity', capacity);
      if (discount) {
        formData.append('discount', discount);
      }

      const response = await instance.post('/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (
    { id, image, title, type, subType, alcohol, price, region, capacity },
    thunkAPI
  ) => {
    try {
      const formData = new FormData();
      if (image) {
        formData.append('image', image);
      }
      formData.append('title', title);
      formData.append('type', type);
      formData.append('subType', subType);
      formData.append('alcohol', alcohol);
      formData.append('price', price);
      formData.append('region', region);
      formData.append('capacity', capacity);

      const response = await instance.patch(`/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeProduct = createAsyncThunk(
  'products/removeProduct',
  async (id, thunkAPI) => {
    try {
      const response = await instance.delete(`products/${id}`);
      console.log('response.data', response.data);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCountByType = createAsyncThunk(
  'products/getTotalByType',
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
  'products/getTotalVinos',
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
  'products/getTotalEspumosos',
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
  'products/getTotalDestilados',
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
