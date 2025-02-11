import PropTypes from "prop-types";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState(["Learn React", "Sudy more", "Cleaning"]);

  return (
    <div>
      <h1>App</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={todo}
            index={index}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          />
        );
      })}
    </div>
  );
};

export default App;

const TodoItem = ({ todo, index, setTodos, todos }) => {
  const onDelte = () => {
    setTodos((prev) => prev.filter((item) => item !== todo));
    alert("삭제되었습니다.");
  };
  return (
    <>
      <div style={{ display: "flex", columnGap: 10 }}>
        <p>
          {index + 1}. {todo}
        </p>
        <button onClick={onDelte}>삭제</button>
      </div>
      <TodoForm setTodos={setTodos} todos={todos} isUpadate payload={todo} />
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.string,
  index: PropTypes.number,
  setTodos: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.string),
};

const TodoForm = ({ todos, setTodos, isUpadate, payload }) => {
  const [input, setInput] = useState();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (input.length === 0) {
          return alert("type todos");
        }
        const foundIndex = todos.findIndex((i) => {
          if (!isUpadate) {
            return i === input && i;
          }
          return i === payload && i;
        });
        if (foundIndex >= 0) {
          return alert("Already added");
        }
        if (isUpadate && foundIndex < 0) {
          return alert("No Such Item");
        }
        setTodos((prev) => {
          let copy = [...prev];
          if (!isUpadate) {
            copy.unshift(input);
          } else {
            copy[foundIndex] = input;
          }

          return copy;
        });
        alert("추가되었습니다.");
      }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>{isUpadate ? "수정" : "추가"}</button>
    </form>
  );
};

TodoForm.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string),
  setTodos: PropTypes.func,
  isUpadate: PropTypes.bool,
  payload: PropTypes.string,
};
