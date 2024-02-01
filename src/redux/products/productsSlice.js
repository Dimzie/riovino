import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = false;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  products: [],
  productById: {},
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, handlePending)
      .addCase(getProducts.rejected, handleRejected)
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const productsReducer = productsSlice.reducer;
