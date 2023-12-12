const UpdateTodo = ({ todo, onUpdate }) => {
  const updateTodo = (e) => {
    // 체크박스 상태에 따라 완료 or 진행 중
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  return (
    <>
      <input
        type="checkbox"
        onClick={updateTodo}
        checked={todo.status === "completed"}
      />
    </>
  );
};

export default UpdateTodo;