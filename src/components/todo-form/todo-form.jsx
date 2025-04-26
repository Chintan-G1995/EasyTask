import React from 'react';
import { useTodos } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const [task, setTask] = React.useState('');
  const { addTodo } = useTodos();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleAddTodo}>
      
  <input
    type="text"
    placeholder="✏️ New task..."
    value={task}
    onChange={(e) => setTask(e.target.value)}
    className="todo-form__input"
  />
  <button type="submit" className="todo-form__button">
    ➕ Add
  </button>
    </form>
  );
};