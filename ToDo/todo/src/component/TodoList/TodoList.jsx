import { useState } from "react";
import AddTodo from "../AddTodo.";
import TodoItem from "./TodoItem";

const TodoList = () => {
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
  return (
    <div>
      <ul>
        {todos.map((todo) => (
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
