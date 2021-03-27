import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const TodoEdit = () => {
  const [todo, setTodo] = useState({
    completed: null,
    description: "",
    id: null,
    title: "",
  });
  const params = useParams();
  console.log("params:", params);
  useEffect(() => {
    fetch(`/todos/${params.id}`)
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, []);

  return (
    <div>
      <h1>Todo Edit</h1>
      <form>
        <label>
          Title:
          <input value={todo.title} />
        </label>
        <label>
          Description:
          <textarea value={todo.description} />
        </label>
      </form>
    </div>
  );
};
