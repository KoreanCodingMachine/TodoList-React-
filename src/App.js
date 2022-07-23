import TodoList from './pages/TodoList';
import { useState, useCallback, useRef } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { title: '1', content: '뭐해', checked: false, id: 1 },
    { title: '2', content: '뭐해', checked: false, id: 2 },
    { title: '3', content: '뭐해', checked: true, id: 3 },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (title, content) => {
      const new_todos = {
        title: title,
        content: content,
        checked: false,
        id: nextId,
      };
      setTodos(todos.concat(new_todos));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        )
      );
    },
    [todos]
  );
  return (
    <>
      <TodoList
        todos={todos}
        onInsert={onInsert}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </>
  );
}

export default App;
