import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
// import { contactsSlice } from 'redux/contactsSlice';
import { contactsApi } from 'redux/contactsApi';
// import { filterSlice } from 'redux/filterSlice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const persistedReduser = persistReducer(
//   persistConfig, contactsSlice.reducer
// );

export const store = configureStore({
    reducer: {
    // contacts: contactsSlice.reducer,
      [contactsApi.reducerPath]: contactsApi.reducer,
    // filter: filterSlice.reducer,

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),

  
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   } )
  // }    
});

setupListeners(store.dispatch);

// export const persistor = persistStore(store);