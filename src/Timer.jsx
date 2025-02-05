import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(60);
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    console.log(counting);
  }, [counting]);

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={() => setCounting((prev) => !prev)}>
        {counting ? "Stop" : "start"}
      </button>
    </div>
  );
};

export default Timer;
