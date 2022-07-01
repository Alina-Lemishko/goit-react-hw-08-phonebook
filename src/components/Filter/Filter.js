import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filterValue, filterValueChanger }) => {
  return (
    <label className={s.filterLabel}>
      Find contacts by name
      <input
        className={s.filterInput}
        name="filter"
        value={filterValue}
        onChange={filterValueChanger}
        placeholder="enter keyword"
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  filterValueChanger: PropTypes.func.isRequired,
};
