import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer([], {
  [actions.contactAdd]: (state, action) => [...state, action.payload],
  [actions.contactDelete]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [actions.contactFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
