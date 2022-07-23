import React from 'react';
import Todo from '../todo/Todo';
import './style.css';

const List = ({ todos, onRemove, onToggle }) => {
  console.log(todos);
  const { title, content, checked, id } = todos;
  return (
    <>
      <div className='working-tree'>
        <div className='title'>
          <h1>Working..</h1>
          <span>🐱‍🏍</span>
        </div>
        <div className='container'>
          {!checked
            ? todos.map((item) => (
                <Todo
                  item={item}
                  key={item.id}
                  onRemove={onRemove}
                  onToggle={onToggle}
                />
              ))
            : null}
        </div>
      </div>
      <div className='done-tree'>
        <div className='title'>
          <h1>Done..</h1>
          <span>👍</span>
        </div>
        <div className='container'>
          {!checked
            ? null
            : todos.map((item) => (
                <Todo
                  item={item}
                  key={item.id}
                  onRemove={onRemove}
                  onToggle={onToggle}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default List;
