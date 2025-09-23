import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: "123" },
    { id: 1, content: "코딩 공부하기" },
    { id: 2, content: "잠 자기" },
  ]);

  return (
    <>
      <header className="header">
        <div className="header-name">
          <h1>할일 리스트</h1>
        </div>
      </header>
      <body className="body">
        <TodoList todoList={todoList} setTodoList={setTodoList} />
        <hr />
        <TodoInput todoList={todoList} setTodoList={setTodoList} />
      </body>
    </>
  );
}

function TodoInput({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        onClick={() => {
          const newTodo = { id: Number(new Date()), content: inputValue };
          const newTodoList = [...todoList, newTodo];
          setTodoList(newTodoList);
          setInputValue("");
        }}
      >
        추가하기
      </button>
    </>
  );
}

function TodoList({ todoList, setTodoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodoList={setTodoList} />
      ))}
    </ul>
  );
}

function Todo({ todo, setTodoList }) {
  const [inputValue, setInputValue] = useState("");
  const [active, setActive] = useState(false); //활성화 상태 변수 선언

  function updateBtn() {
    setActive(!active);
    setTodoList((prev) =>
      prev.map((el) =>
        el.id === todo.id ? { ...el, content: inputValue } : el
      )
    );
    // console.log(inputValue);
    if (inputValue !== "" && inputValue !== "null") {
      setInputValue("");
    }
  }

  return (
    <li>
      할일 : {todo.content}
      {active && (
        <input
          //disabled={!active} //active 전에 먼저 추가한 disabled 속성
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      )}
      <button onClick={updateBtn}>수정</button>
      <button
        onClick={() => {
          setTodoList((prev) => {
            return prev.filter((el) => el.id !== todo.id);
          });
        }}
      >
        삭제
      </button>
      <span>
        완료
        <input type="checkbox"></input>
      </span>
    </li>
  );
}

export default App;
