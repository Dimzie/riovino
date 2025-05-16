import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';

export const getHoldedProducts = createAsyncThunk(
  'products/getHoldedProducts',
  async (_, thunkAPI) => {
    try {
      await instance.get('/products/holded');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async ({ subType, page = 1, limit = 20}, thunkAPI) => {
    try {
      if (!subType) {
        const response = await instance.get('/products');
        console.log('response.data', response.data);
        return response.data;
      } else {
        const response = await instance.get(
          `/products?page=${page}&limit=${limit}&subType=${subType}`
        );
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
      // console.log('response.data', response.data);
      console.log('by id', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (
    {
      image1,
      image2,
      title,
      type,
      subType,
      alcohol,
      price,
      region,
      capacity,
      discount,
      critics,
    },
    thunkAPI
  ) => {
    try {
      const formData = new FormData();
      if (image1) {
        formData.append('images', image1);
      }
      if (image2) {
        formData.append('images', image2);
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

      if (critics.length > 0) {
        console.log('response.data._id', response.data._id);
        const secondaryResponse = await instance.patch(
          `/products/${response.data._id}`,
          { critics }
        );
        console.log('secondaryResponse.data', secondaryResponse.data);
        return secondaryResponse.data;
      }

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
    {
      id,
      image1,
      image2,
      title,
      type,
      subType,
      alcohol,
      price,
      region,
      capacity,
      discount,
      critics,
    },
    thunkAPI
  ) => {
    try {
      const formData = new FormData();
      if (image1) {
        formData.append('images', image1);
      }
      if (image2) {
        formData.append('images', image2);
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

      await instance.patch(`/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const response = await instance.patch(`/products/${id}`, { critics });
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
