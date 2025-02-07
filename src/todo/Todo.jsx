import { useState, useRef } from "react";
import { store, fetchList, deleteItem } from "./database";

const Todo = () => {
  const [list, setList] = useState(fetchList() ?? []);

  const [todo, setTodo] = useState("");

  const ref = useRef(null);

  const onSubmit = () => {
    if (todo.length < 1) {
      alert("warning");
      ref.current?.focus();
      return;
    }

    setList((prev) => [todo, ...prev]);
    setTodo("");
    alert("ㅊㅋㅊㅋ");
    ref.current?.focus();
  };

  return (
    <div>
      <h1>장보기 목록</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          ref={ref}
        />
        <button>추가</button>
      </form>
      <ul>
        {list.map((todo) => {
          const onDel = () => setList((p) => p.filter((i) => i !== todo));

          return (
            <li key={todo}>
              {todo}
              <button onClick={onDel}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
