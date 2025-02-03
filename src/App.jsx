import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";
import Like from "./Like";

const App = () => {
  const [name, setName] = useState("강산");
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Header name={name} />
      <h1>React-Tutorial</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <Counter count={count} setCount={setCount} />
      <Like liked={liked} setLiked={setLiked} />
      <Footer name={name} />
    </>
  );
};

export default App;
