import { useState, useEffect } from "react";

export default function Counter() {

  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((count) => count + 1);
  }

  function handleDecrement() {
    if (count === 0) {
      alert("Cant decrease now");
      return;
    }
    setCount((count) => count - 1);
  }

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <>
      <h1>Counter App</h1>

      <h3>Count = {count}</h3>

      <button onClick={handleIncrement}> + </button>

      <button onClick={handleDecrement}> - </button>
    </>
  );
}