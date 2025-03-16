import { useEffect, useRef, useState } from "react";

function UseRef() {
  const [count, setCount] = useState(60);

  const timerId = useRef();
  const h1Ref = useRef();

  useEffect(() => {
    console.log(h1Ref.current);

    const rect = h1Ref.current.getBoundingClientRect();
    console.log(rect);
  });

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prev => prev - 1);
    }, 1000);
    console.log("-1");
  }

  const hanldeStop = () => {
    clearInterval(timerId.current);
    console.log("stop");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1 ref={h1Ref} >{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={hanldeStop}>Stop</button>
    </div>
  );
}

export default UseRef;