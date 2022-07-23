import React from 'react';
import Todo from '../todo/Todo';
import './style.css';

const List = ({ todos, onDelete, onToggle }) => {
  return (
    <>
      <div className='working-tree'>
        <div className='title'>
          <h1>Working..</h1>
          <span>🐱‍🏍</span>
        </div>
        <div className='container'>
          {todos.map((item, index) => (
            <Todo item={item} key={index} />
          ))}
        </div>
      </div>
      <div className='done-tree'>
        <div className='title'>
          <h1>Done..</h1>
          <span>👍</span>
        </div>
        <div className='container'>
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
    </>
  );
};

export default List;
