import { useEffect, useState } from "react";

const App = () => {
  const [sec, setSec] = useState(0);
  const [counting, setCounting] = useState(false);

  const onPlus = () => {
    setSec((prev) => prev + 1000);
  };

  const onMinus = () => {
    setSec((prev) => prev - 1000);
  };

  const onReset = () => {
    setSec(0);
  };

  useEffect(() => {
    console.log(sec);
  }, [sec]);
  //[] 빈 배열은 최초 1회만 실행 해당 컴포넌트가 렌더링 되는 시점

  useEffect(() => {
    if (counting) {
      const count = setInterval(() => {
        setSec((prev) => prev + 10);
      }, 10);

      return () => {
        clearInterval(count);
      };
    }
  }, [counting]);

  // //[]빈배열 뜻 => 최초 1회 실행
  // useEffect(() => {
  //   console.log("App has mounted!");
  // }, []);

  // //배열을 사용하지 않으면 모든 것들에 반응하는 코드가 된다
  // useEffect(() => {
  //   console.log("App has rendered");
  // });

  // //베열에 주시하고 싶은 변수/함수를 넣어두면 해당 변수/함수가 업데이트 될 때에만 작동하는 코드를 짤수 있다.
  // useEffect(() => {}, []);

  return (
    <div>
      <h1>App</h1>
      <h3>{sec / 1000}초</h3>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
      <button onClick={onReset}>RESET</button>
      <button
        onClick={() => {
          setCounting((prev) => !prev);
        }}
      >
        {counting ? "STOP" : "START"}
      </button>
    </div>
  );
};

export default App;
