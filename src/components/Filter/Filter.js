import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from 'redux/contacts/contacts-selectors';
import contactsAction from 'redux/contacts/contacts-actions';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(filterSelector);
  const dispatch = useDispatch();

  return (
    <label className={s.filterLabel}>
      Find contacts by name
      <input
        className={s.filterInput}
        name="filter"
        value={value}
        onChange={e => dispatch(contactsAction.contactFilter(e.target.value))}
        placeholder="enter keyword"
      />
    </label>
  );
};

export default Filter;
