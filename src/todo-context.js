import React from 'react';

export const TodosContext = React.createContext({
  todos: [],
  setTodos: () => {},
  addTodo: () => {},
  toggleTodo: () => {},
  deleteTodo: () => {},
  resetTodos: () => {},
  filterStatus: 'ALL',
  setFilterStatus: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
});

export const useTodos = () => React.useContext(TodosContext);