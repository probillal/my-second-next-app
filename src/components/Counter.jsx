"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Counter component rendered");
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="btn btn-accent">
        Increment
      </button>
    </div>
  );
};

export default Counter;
