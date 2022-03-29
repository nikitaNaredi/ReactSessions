import React, { useEffect, useState } from "react";

function UseEffectWithCleanup() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      console.log("inside time interval");
    }, 10000);
    return () => {
      console.log("inside cleanup");
      clearInterval(id);
    };
  });

  return (
    <>
      <h1>Hello!!</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}

export default UseEffectWithCleanup;
