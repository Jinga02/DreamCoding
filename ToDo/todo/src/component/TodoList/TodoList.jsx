import { useState } from "react";
import AddTodo from "../AddTodo.";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: "1", text: "장 보기", status: "active" },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={addTodo} />
    </div>
  );
};
export default TodoList;
