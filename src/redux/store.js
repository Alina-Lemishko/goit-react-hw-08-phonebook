import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contacts-slice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
  },
});
