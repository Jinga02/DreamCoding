import { useState } from "react";
import AddTodo from "../AddTodo.";
import DeleteTodo from "./\bDeleteTodo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: "1", text: "장 보기", status: "active" },
  ]);

  // todo 추가
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // todo 삭제
  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
      <AddTodo onAdd={addTodo} />
    </div>
  );
};
export default TodoList;
