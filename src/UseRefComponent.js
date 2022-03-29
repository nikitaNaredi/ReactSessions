import React, { useEffect, useRef, useState } from "react";

export default function UseRefComponent() {
  const [counter, setCounter] = useState(0);
  const ref = useRef();

  useEffect(() => {
    ref.current = "GeeksforGeeeks";
  }, []);

  useEffect(() => {
    console.log(counter, ref.current);
  }, [counter]);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Example on useRef</h3>
        <button onClick={() => setCounter((c) => c + 1)}>Increment</button>
        <h5>Counter Value: {counter}</h5>
      </header>
    </div>
  );
}
