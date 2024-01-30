import { createSlice } from '@reduxjs/toolkit';

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
  reducers: {},
});

export const productsReducer = productsSlice.reducer;
