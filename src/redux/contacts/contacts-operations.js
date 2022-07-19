import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

import * as API from '../../services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.getContacts();
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.addContact(data);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (data, { getState }) => {
      const {
        contacts: { items },
      } = getState();
      const duplicate = items.some(contact => contact.name === data.name);
      if (duplicate) {
        Notify.failure(`${data.name} is already in contacts`);
        return false;
      }
      Notify.success(`${data.name} was added in contacts`);
      return data;
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      const { id: deleteId } = await API.removeContact(id);
      return deleteId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
