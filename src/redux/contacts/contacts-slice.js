import { createSlice } from '@reduxjs/toolkit';

import * as operations from './contacts-operations';

export const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [operations.fetchContacts.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [operations.fetchContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [operations.fetchContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [operations.addContact.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [operations.addContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items.unshift(payload);
    },
    [operations.addContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [operations.removeContact.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [operations.removeContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter(({ id }) => id !== payload);
    },
    [operations.removeContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default contactsSlice.reducer;
