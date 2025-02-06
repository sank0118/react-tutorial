import { useState, useEffect, useRef } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const ref = useRef(null);

  const valueRef = useRef(0);
  //ref = 안보이는 곳에서 열일한느 친구/ 한발 느린 친구

  const valueCheck = () => {
    if (value.length === 0) {
      alert("아무것도 입력하지 않았습니다.");

      // ref.current?.focus();
      const input = document.querySelector("input#myInput");
      input.focus();

      return;
    }

    if (ref.current?.value.length === 0) {
      alert("아무것도 입력하지 않았습니다.");

      ref.current?.showPicker();

      return;
    }

    alert(`you just typed: ${value}`);
    const length = value.length;
    valueRef.current = length;
  };

  useEffect(() => {
    console.log({ value });
  }, [value]);

  return (
    <div>
      <h1>React Tutorial: {valueRef.current}</h1>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={ref}
        id="myInput"
      />
      <select name="" id="" ref={ref}>
        <option value="">a</option>
        <option value="">b</option>
      </select>
      <button onClick={valueCheck}>value check</button>
    </div>
  );
};

export default App;
