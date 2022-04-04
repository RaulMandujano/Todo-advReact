import React, { useState } from 'react';
import Form from '../components/Form';
import { MdDeleteOutline } from 'react-icons/md';
import { MdMode } from 'react-icons/md';
import { MdOutlineDoneOutline } from 'react-icons/md';

const Todo = ({ todos, completeTodo, deleteTodo, updateTodo }) => {
  const [cambiar, setCambiar] = useState({
    id: null,
    value: ''
  });

  const submitNewTodo = value => {
    updateTodo(cambiar.id, value);
    setCambiar({
      id: null,
      value: ''
    });
  };

  if (cambiar.id) {
    return <Form cambiar={cambiar} onSubmit={submitNewTodo} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.completed ? 'todo-linea completeTodo' : 'todo-linea'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div>
        <MdDeleteOutline
          onClick={() => deleteTodo(todo.id)}
        />
        <MdMode
          onClick={() => setCambiar({ id: todo.id, value: todo.text })}
        />
        <MdOutlineDoneOutline
        onClick={() => completeTodo(todo.id)}
        />
      </div>
    </div>
  ));
};

export default Todo;