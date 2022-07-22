import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import contactsSlice from './contacts/contacts-slice';
import filter from './contacts/filter-slice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistAuthConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter,
    auth: persistedReducer,
  },
  middleware: customizedMiddleware,
});

export const persistore = persistStore(store);
