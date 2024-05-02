import React from 'react';
import css from '../Filter/Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={css.filterLabel}>
    Find contacts by name <br />
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;