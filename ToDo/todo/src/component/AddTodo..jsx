import { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: "1", text: todo, status: "active" });
    setTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={todo} onChange={handleChange} />
      <button>ADD</button>
    </form>
  );
};
export default AddTodo;
