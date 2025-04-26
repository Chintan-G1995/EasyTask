import React from 'react';
import { useTodos } from '../../todo-context';
import './filter-bar.scss';

export const FilterBar = () => {
  const { filterStatus, setFilterStatus, searchQuery, setSearchQuery } = useTodos();

  return (
    <div className="filter-bar">
  <div className="filter-bar__tabs">
    {['ALL', 'ACTIVE', 'COMPLETED'].map((status) => (
      <button
        key={status}
        className={`filter-bar__tab ${filterStatus === status ? 'filter-bar__tab--active' : ''}`}
        onClick={() => setFilterStatus(status)}
      >
        {status}
      </button>
    ))}
  </div>
  <div className="filter-bar__search">
    <input
      type="text"
      placeholder="🔎 Search tasks..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="filter-bar__search-input"
    />
  </div>
</div>

  );
};