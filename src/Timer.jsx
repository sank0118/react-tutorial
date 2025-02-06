import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(60);
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    console.log(counting);
  }, [counting]);

  useEffect(() => {
    if (counting) {
      const countTime = setInterval(() => {
        setTime((prev) => (prev === 0 ? 0 : prev - 1));
      }, 1000);

      return () => {
        clearInterval(countTime);
      };
    }
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
