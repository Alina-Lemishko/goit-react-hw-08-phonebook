import React, { memo } from 'react';

import s from './Filter.module.css';

const Filter = ({ filter, setFilter }) => {
  return (
    <label className={s.filterLabel}>
      Find contacts by name
      <input
        className={s.filterInput}
        name="filter"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="enter keyword"
      />
    </label>
  );
};

export default memo(Filter);
