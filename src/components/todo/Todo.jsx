import React from 'react';
import './style.css';

const Todo = ({ item }) => {
  console.log(item);
  return (
    <div className='cards'>
      <h1>{}</h1>
      <p>리액트 기초를 공부해봅시다.</p>
      <button>시작하기</button>
      <button>완료</button>
    </div>
  );
};

export default Todo;
