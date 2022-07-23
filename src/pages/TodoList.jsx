import React from 'react';
import Header from '../components/header/Header';
import Form from '../components/form/Form';
import List from '../components/list/List';

const TodoList = ({ todos, onInsert, onDelete, onToggle }) => {
  return (
    <>
      <Header />
      <Form onInsert={onInsert} />
      <List todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </>
  );
};

export default TodoList;
