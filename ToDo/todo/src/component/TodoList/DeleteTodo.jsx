const DeleteTodo = ({ todoId, onDelete }) => {
  const deleteTodo = () => {
    // console.log(todoId);
    onDelete(todoId);
  };
  return <button onClick={deleteTodo}>삭제</button>;
};
export default DeleteTodo;
