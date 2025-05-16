import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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
  cart: [],
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
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1 } = action.payload;
      const existing = state.cart.find(
        item => item.product.id === product.id
      );

      if (existing) {
        existing.quantity += quantity;
      } else {
        state.cart.push({ product, quantity });
      }
    },

    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existing = state.cart.find(item => item.product.id === id);
      if (existing) {
        existing.quantity = quantity;
      } else {
        // Auto-remove if quantity is 0 or negative
        state.cart = state.cart.filter(item => item.product.id !== id);
      }
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter(item => item.product.id !== productId);
    },

    clearCart: state => {
      state.cart = [];
    },
  },

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

const productsPersistConfig = {
  key: 'products',
  storage,
  whitelist: ['cart'], // Only persist the cart
};

export const { addToCart, removeFromCart, clearCart, updateCartItemQuantity } =
  productsSlice.actions;

export const persistedProductsReducer = persistReducer(
  productsPersistConfig,
  productsSlice.reducer
);
