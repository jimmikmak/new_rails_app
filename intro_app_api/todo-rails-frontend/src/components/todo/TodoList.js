import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((el) => (
          <li key={el.id}>
            <Link to={`/todo/edit/${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
