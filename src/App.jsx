import { useState, useEffect, useRef } from "react";

const initialState = [];

const App = () => {
  const [todos, setTodos] = useState(initialState);
  const [todo, setTodo] = useState("");

  const ref = useRef(null);

  const onSubmit = () => {
    console.log(todo);
    if (todo.length === 0) {
      alert("경고");
      return ref.current?.focus();
    }

    if (todo.length <= 1) {
      alert("warning");
      return ref.current?.focus();
    }

    // setTodos((prev) => {
    //   return [todo, ...prev];
    //   //set함수는 무조건 원래의 값과 같은 타입을 return 해줘야함
    // }); //배열은 무조건 이전값을 다뤄야 함
    setTodos((prev) => [todo, ...prev]);

    setTodo("");
    ref.current?.focus();
  };

  useEffect(() => {
    console.log({ todos });
  }, [todos]);

  return (
    <div>
      <h1>App</h1>
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
        <button>ADD</button>
      </form>
      <ul>
        {todos.map((todo) => {
          const onDelete = () =>
            setTodos((prev) => prev.filter((item) => item !== todo));

          return (
            <li key={todo}>
              {todo}
              <button onClick={onDelete}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
