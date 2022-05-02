import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { contactsSlice } from 'redux/contactsSlice';
import { contactsApi } from './contactsApi';
import { filterSlice } from 'redux/filterSlice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const persistedReduser = persistReducer(
//   persistConfig, contactsSlice.reducer
// );

export const store = configureStore({
    reducer: {
    contacts: contactsSlice.reducer,
      [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   } )
  // }    
});

// export const persistor = persistStore(store);