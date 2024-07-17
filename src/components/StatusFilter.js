// src/components/StatusFilter.js
import React from 'react';

const StatusFilter = ({ setFilter }) => {
  return (
    <div className="status-filter">
      <label>Status Filter: </label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Not Completed">Not Completed</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default StatusFilter;
