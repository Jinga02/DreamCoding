import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const AddTodo = ({ onAdd }) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim().length > 0) {
      onAdd({ id: uuidv4(), text: todo, status: "active" });
    }
    setTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={todo} onChange={handleChange} placeholder="Add Todo" />
      <button>ADD</button>
    </form>
  );
};
export default AddTodo;
