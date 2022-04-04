import React from 'react';
import Form from './Form';
import Todo from './Todo'
import useLocalStorage from '../Hooks/useLocalStorage';

import '../../src/index.css';

function List() {
  const [todos, setTodos] = useLocalStorage( 'todos', [
    {
      id: 1,
      text: "Food",
    },
    {
      id: 2,
      text: "Landon React Assigment",
      completed: true,
    }
  ]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, addedValue) => {
    if (!addedValue.text || /^\s*$/.test(addedValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? addedValue : item)));
  };

  const deleteTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <Form onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default List;