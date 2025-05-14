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
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  products: {
    products: [],
    totalProducts: 0,
  },
  productById: {},
  countByType: {},
  vinosCount: {},
  espumososCount: {},
  destiladosCount: {},
  isLoading: false,
  isProductLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      // PENDING
      .addCase(getProducts.pending, handlePending)
      .addCase(getProductById.pending, state => {
        state.isProductLoading = true;
      })
      .addCase(addProduct.pending, handlePending)
      .addCase(updateProduct.pending, handlePending)
      .addCase(removeProduct.pending, handlePending)
      .addCase(getCountByType.pending, handlePending)
      .addCase(getVinosCount.pending, handlePending)
      .addCase(getEspumososCount.pending, handlePending)
      .addCase(getDestiladosCount.pending, handlePending)
      // REJECTED
      .addCase(getProducts.rejected, handleRejected)
      .addCase(getProductById.rejected, (state, { payload }) => {
        state.isProductLoading = false;
        state.error = payload;
      })
      .addCase(addProduct.rejected, handleRejected)
      .addCase(updateProduct.rejected, handleRejected)
      .addCase(removeProduct.rejected, handleRejected)
      .addCase(getCountByType.rejected, handleRejected)
      .addCase(getVinosCount.rejected, handleRejected)
      .addCase(getEspumososCount.rejected, handleRejected)
      .addCase(getDestiladosCount.rejected, handleRejected)
      // FULLFILLED
      .addCase(getProducts.fulfilled, (state, action) => {
        const { payload } = action;
        const currentPage = action.meta.arg.page;

        if (currentPage === 1) {
          state.products = payload;
        } else {
          state.products = {
            ...payload,
            products: [...state.products.products, ...payload.products],
          };
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        state.productById = payload;
        state.isProductLoading = false;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.products.products.push(payload);
        state.isLoading = false;
        state.error = null;
        // if (payload.type === 'vinos') {
        //   state.countByType.totalVinos += 1;
        // } else if (payload.type === 'espumosos') {
        //   state.countByType.totalEspumosos += 1;
        // } else if (payload.type === 'destilados') {
        //   state.countByType.totalDestilados += 1;
        // }
      })
      .addCase(updateProduct.fulfilled, (state, { payload }) => {
        const index = state.products.products.findIndex(
          product => product._id === payload._id
        );
        state.products.products[index] = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeProduct.fulfilled, (state, { payload }) => {
        const index = state.products.products.findIndex(
          product => product._id === payload
        );
        state.products.products.splice(index, 1);
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
