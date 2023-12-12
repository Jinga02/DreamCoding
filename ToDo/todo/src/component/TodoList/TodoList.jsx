import { useState } from "react";

import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo.";

const TodoList = ({ filter }) => {
  const [todos, setTodos] = useState([
    { id: "1", text: "장 보기", status: "active" },
  ]);

  // todo 추가
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  // todo 업데이트
  const handleUpdate = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)),
    );
    console.log(updatedTodo);
  };
  // todo 삭제
  const handleDelete = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleFilter = (todos, filter) => {
    if (filter === "all") {
      return todos;
    }
    return todos.filter((todo) => todo.status === filter);
  };

  const filterdTodo = handleFilter(todos, filter);
  return (
    <div>
      <ul>
        {filterdTodo.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
      <AddTodo onAdd={addTodo} />
    </div>
  );
};
export default TodoList;
