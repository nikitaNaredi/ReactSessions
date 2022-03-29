import React, { useCallback, useState } from "react";
function StateComponent() {
  const [count, setCount] = useState(0);

  // function increment() {
  //   setCount(count + 1);
  //   console.log("inside increment");
  // }

  const increment = useCallback(() => {
    setCount(count + 1);
    console.log("inside increment");
  }, []);

  const element = (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
  return element;
}

export default StateComponent;
