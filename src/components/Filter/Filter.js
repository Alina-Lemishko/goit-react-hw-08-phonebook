import React from 'react';

const Filter = ({ filterValue, filterValueChanger }) => {
  return (
    <label>
      Find contacts by name
      <input name="filter" value={filterValue} onChange={filterValueChanger} />
    </label>
  );
};

export default Filter;
