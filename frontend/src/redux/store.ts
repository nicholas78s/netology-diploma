import { configureStore } from '@reduxjs/toolkit';
import { api } from './services/api';
import queryParamsReducer from './slices/queryParamsSlice';
import loadButtonReducer from './slices/loadButtonSlice';
import pagesReducer from './slices/pagesSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    queryParams: queryParamsReducer,
    loadButton: loadButtonReducer,
    pages: pagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
