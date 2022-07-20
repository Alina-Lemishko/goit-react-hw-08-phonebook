import { createSlice } from '@reduxjs/toolkit';

const filter = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    contactFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { contactFilter } = filter.actions;
export default filter.reducer;
