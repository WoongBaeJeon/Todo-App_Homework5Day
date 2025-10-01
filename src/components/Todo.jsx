import { useState } from "react";

function Todo({ todo, setTodoList }) {
  const [inputValue, setInputValue] = useState("");
  const [active, setActive] = useState(false); //활성화 상태 변수 선언

  function updateBtn() {
    setActive(!active);

    if (!inputValue.trim()) return;
    setTodoList((prev) =>
      prev.map((el) =>
        el.id === todo.id ? { ...el, content: inputValue } : el
      )
    );
    // console.log(inputValue);
    if (inputValue !== "") {
      setInputValue("");
    }
  }

  function handleChange(e) {
    console.log("e.target.checked" + e.target.checked);
    setTodoList((prev) =>
      prev.map((el) =>
        el.id === todo.id ? { ...el, isCom: e.target.checked } : el
      )
    );
    console.log("todo.isCom" + todo.isCom);
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
        <input
          type="checkbox"
          checked={todo.isCom}
          onChange={handleChange}
        ></input>
      </span>
    </li>
  );
}

export default Todo;
