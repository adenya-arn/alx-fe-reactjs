import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter</h2> <br />
      <p>Current count: {count}</p>
      <br />
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <br /> <br />
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br /> <br />
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
