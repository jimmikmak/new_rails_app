import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { TodoList } from "./components/todo/TodoList";
import { TodoEdit } from "./components/todo/TodoEdit";
import { UserForm } from "./components/user/UserForm";
import { UserRegisterForm } from "./components/user/UserRegisterForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/register">
            <UserRegisterForm />
          </Route>

          <Route exact path="/login">
            <UserForm />
          </Route>

          <Route exact path="/todo/create">
            <h1>Todo Create</h1>
          </Route>

          <Route exact path="/todo/edit/:id">
            <TodoEdit />
          </Route>

          <Route exact path="/">
            <TodoList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
