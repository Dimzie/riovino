import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { productsReducer } from './products/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  //   middleware(getDefaultMiddleware) {
  //     return getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     });
  //   },
});

// export const persistor = persistStore(store);
