import "./App.css";
import { Header } from "./components/header/Header";
import CreateTodo from "./components/create-todo/CreateTodo";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="todo_body">
        <CreateTodo />
        <div className="todo_items">
          <Todo text="Aziz" />  {/* Todo({ text: "Aziz" })  */}
          <Todo text="Aman" />
          <Todo checked={true} text="Azamat" />
        </div>
      </div>
    </div>
  );
}

export default App;
