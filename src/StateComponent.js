import React, { useState } from "react";
function StateComponent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  const element = (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
  return element;
}
ReactDOM.render(<StateComponent />, document.getElementById("root"));
