import { BsFillTrashFill } from "react-icons/bs";

const DeleteTodo = ({ todoId, onDelete }) => {
  const deleteTodo = () => {
    onDelete(todoId);
  };
  return (
    <button onClick={deleteTodo}>
      <BsFillTrashFill />
    </button>
  );
};
export default DeleteTodo;
