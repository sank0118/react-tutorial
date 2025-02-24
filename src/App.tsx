import { useState, useEffect } from "react";

const App = () => {
  // useState와 () 사이에 <>안에 타입 지정
  const [a, setA] = useState<number>(0);

  const [s, setS] = useState<string>("0");

  const [b, setB] = useState<boolean>(true);

  console.log(a);

  useEffect(() => {
    setA(12);
  }, []);

  return (
    <div>
      <h1>App:{a}</h1>
    </div>
  );
};

export default App;
