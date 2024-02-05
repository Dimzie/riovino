import { createSlice } from '@reduxjs/toolkit';
import {
  getProducts,
  getCountByType,
  getDestiladosCount,
  getEspumososCount,
  getVinosCount,
  getProductById,
  addProduct,
  updateProduct,
  removeProduct,
} from './operations';

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
  countByType: {},
  vinosCount: {},
  espumososCount: {},
  destiladosCount: {},
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      // PENDING
      .addCase(getProducts.pending, handlePending)
      .addCase(getProductById.pending, handlePending)
      .addCase(addProduct.pending, handlePending)
      .addCase(updateProduct.pending, handlePending)
      .addCase(removeProduct.pending, handlePending)
      .addCase(getCountByType.pending, handlePending)
      .addCase(getVinosCount.pending, handlePending)
      .addCase(getEspumososCount.pending, handlePending)
      .addCase(getDestiladosCount.pending, handlePending)
      // REJECTED
      .addCase(getProducts.rejected, handleRejected)
      .addCase(getProductById.rejected, handleRejected)
      .addCase(addProduct.rejected, handleRejected)
      .addCase(updateProduct.rejected, handleRejected)
      .addCase(removeProduct.rejected, handleRejected)
      .addCase(getCountByType.rejected, handleRejected)
      .addCase(getVinosCount.rejected, handleRejected)
      .addCase(getEspumososCount.rejected, handleRejected)
      .addCase(getDestiladosCount.rejected, handleRejected)
      // FULLFILLED
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        state.productById = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.products.push(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, { payload }) => {
        const index = state.products.findIndex(
          product => product._id === payload._id
        );
        state.products[index] = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeProduct.fulfilled, (state, { payload }) => {
        const index = state.products.map(product => product._id === payload);
        state.products.splice(index, 1);
      })
      .addCase(getCountByType.fulfilled, (state, { payload }) => {
        state.countByType = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getVinosCount.fulfilled, (state, { payload }) => {
        state.vinosCount = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getEspumososCount.fulfilled, (state, { payload }) => {
        state.espumososCount = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getDestiladosCount.fulfilled, (state, { payload }) => {
        state.destiladosCount = payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const productsReducer = productsSlice.reducer;
