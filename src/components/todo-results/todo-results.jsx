import React from 'react';
import { useTodos } from '../../todo-context';
import './todo-results.scss';

export const TodoResults = () => {
  const { todos, resetTodos } = useTodos();
  
  const completedCount = todos.filter(todo => todo.checked).length;
  const totalCount = todos.length;

  return (
    <div className="todo-results">
    <div className="todo-results__count">
      <span className="todo-results__label">✅ Completed:</span>
      <span className="todo-results__value">{completedCount} / {totalCount}</span>
    </div>
    {completedCount > 0 && (
      <button 
        className="todo-results__reset" 
        onClick={resetTodos}
      >
        🔄 Reset Completed
      </button>
    )}
  </div>
  
  );
};