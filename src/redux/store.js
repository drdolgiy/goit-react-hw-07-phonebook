import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactsApi } from 'redux/contactsApi';
import { filterSlice } from 'redux/filterSlice';

export const store = configureStore({
    reducer: {
      [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),    
});

setupListeners(store.dispatch);
