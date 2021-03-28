import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("/api/todos", {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);
        if (data.length) {
          setTodos(data);
        }
      })
      .catch((error) => console.log("CATCH error:", error));
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
