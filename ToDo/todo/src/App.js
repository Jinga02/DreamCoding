import { useState } from "react";
import Header from "./component/Header/Header";
import TodoList from "./component/TodoList/TodoList";

function App() {
  const filters = ["all", "active", "completed"];
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      <Header filter={filter} filters={filters} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
