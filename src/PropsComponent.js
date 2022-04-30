import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
function PropsComponent() {
  const [count, setCount] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setCount((c) => !c);
        }}
      >
        Click
      </button>
      <ChildComponent isLoggedIn={count} />;
    </>
  );
}

export default PropsComponent;
