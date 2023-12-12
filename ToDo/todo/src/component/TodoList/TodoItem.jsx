import DeleteTodo from "./\bDeleteTodo";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <p>
        {todo.text}
        <DeleteTodo todoId={todo.id} onDelete={onDelete} />
      </p>
    </>
  );
};
export default TodoItem;
