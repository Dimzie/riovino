import { createSlice } from '@reduxjs/toolkit';
import {
  getProducts,
  getCountByType,
  getDestiladosCount,
  getEspumososCount,
  getVinosCount,
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
      .addCase(getCountByType.pending, handlePending)
      .addCase(getVinosCount.pending, handlePending)
      .addCase(getEspumososCount.pending, handlePending)
      .addCase(getDestiladosCount.pending, handlePending)
      // REJECTED
      .addCase(getProducts.rejected, handleRejected)
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
