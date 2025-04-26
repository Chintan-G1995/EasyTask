import React from 'react';
import { useTodos } from '../../todo-context';
import { Checkbox } from '../checkbox';
import './todo-list.scss';

export const TodoList = () => {
  const { todos, toggleTodo, deleteTodo, filterStatus, searchQuery } = useTodos();
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5;

  const filteredTodos = todos
    .filter(todo => {
      if (filterStatus === 'ACTIVE') return !todo.checked;
      if (filterStatus === 'COMPLETED') return todo.checked;
      return true;
    })
    .filter(todo => 
      todo.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

  
  const sortedFilteredTodos = filteredTodos.sort((a, b) => b.id - a.id);

  
  const totalPages = Math.ceil(sortedFilteredTodos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTodos = sortedFilteredTodos.slice(startIndex, endIndex);

  return (
    <div className="todo-list">
      <div className="todo-list__container">
        {currentTodos.length === 0 ? (
          <div className="todo-list__empty">
            {searchQuery ? 'No tasks match your search' : 'No tasks found'}
          </div>
        ) : (
          <div className="todo-list__items">
            {currentTodos.map((todo) => (
              <div key={todo.id} className="todo-list__item">
                <Checkbox 
                  label={todo.label} 
                  checked={todo.checked} 
                  onChange={() => toggleTodo(todo.id)}
                />
                <button 
                  onClick={() => deleteTodo(todo.id)}
                  className="todo-list__delete-btn"
                  aria-label="Delete task"
                  title="Delete task"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    width="20" height="20" 
                    viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="2" 
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="todo-list-pagination">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="todo-list-pagination-btn"
          >
            «
          </button>
          <div className="todo-list-pagination-info">
            Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
          </div>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="todo-list-pagination-btn"
          >
            »
          </button>
        </div>
      )}
    </div>
  );
};
