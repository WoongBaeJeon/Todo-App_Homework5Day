import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: "123", isCom: true },
    { id: 1, content: "코딩 공부하기", isCom: true },
    { id: 2, content: "잠 자기", isCom: false },
  ]);

  return (
    <>
      <header className="header">
        <div className="header-name">
          <h1>할일 리스트</h1>
        </div>
      </header>
      <div className="body">
        <TodoList todoList={todoList} setTodoList={setTodoList} />
        <hr />
        <TodoInput todoList={todoList} setTodoList={setTodoList} />
      </div>
    </>
  );
}

export default App;
