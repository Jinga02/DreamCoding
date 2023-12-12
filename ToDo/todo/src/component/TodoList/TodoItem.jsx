import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  return (
    <>
      <li>
        <UpdateTodo todo={todo} onUpdate={onUpdate} />
        {todo.text}
        <DeleteTodo todoId={todo.id} onDelete={onDelete} />
      </li>
    </>
  );
};
export default TodoItem;
