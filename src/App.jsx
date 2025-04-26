import * as React from 'react';
import { TodoForm } from './components/todo-form';
import { TodoList } from './components/todo-list';
import { TodoResults } from './components/todo-results';
import { TodosContext } from './todo-context';
import { FilterBar } from './components/filter-bar';
import './index.scss';

const todosTemplate = [
  {
    id: 0,
    label: 'Fix the app to display the list of all tasks',
    checked: false,
  },
  {
    id: 1,
    label: 'Fix the layout so that checkboxes are displayed in a vertical column',
    checked: false,
  },
  {
    id: 2,
    label: 'Fix the functionality to add a new task',
    checked: false,
  },
  {
    id: 3,
    label: 'Fix the functionality to mark a task as completed',
    checked: false,
  },
  {
    id: 4,
    label: 'Fix the functionality to delete a task',
    checked: false,
  },
  {
    id: 5,
    label: 'Fix the task counter to count completed tasks correctly',
    checked: false,
  },
  {
    id: 6,
    label: 'Add a filter to toggle between completed and incomplete tasks',
    checked: false,
  },
  {
    id: 7,
    label: 'Add a search feature to find tasks by text',
    checked: false,
  },
  {
    id: 8,
    label: 'Bonus: Implement pagination or lazy loading if tasks exceed 10',
    checked: false,
  },
  {
    id: 9,
    label: 'Bonus: Write test cases for important functionality',
    checked: false,
  },
  {
    id: 10,
    label: 'Bonus: Add additional UI views (e.g., task detail, stats)',
    checked: false,
  },
];

export const App = () => {
  const [todos, setTodos] = React.useState(todosTemplate);
  const [filterStatus, setFilterStatus] = React.useState('ALL');
  const [searchQuery, setSearchQuery] = React.useState('');

  const addTodo = (label) => {
    const newTodo = {
      id: todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 0,
      label,
      checked: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const resetTodos = () => {
    setTodos(todos.map(todo => ({ ...todo, checked: false })));
  };

  return (
    <div className="root">
      <h2>Todo Manager</h2>
      <TodosContext.Provider value={{ 
        todos, 
        setTodos, 
        addTodo, 
        toggleTodo, 
        deleteTodo, 
        resetTodos,
        filterStatus,
        setFilterStatus,
        searchQuery,
        setSearchQuery
      }}>
        <TodoForm />
        <FilterBar />
        <TodoList />
        <TodoResults />
      </TodosContext.Provider>
    </div>
  );
};