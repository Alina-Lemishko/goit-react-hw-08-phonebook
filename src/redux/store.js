import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contacts-slice';
import filter from './contacts/filter-slice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filter,
  },
});
