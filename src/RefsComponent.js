import React from "react";

const FancyButton = React.forwardRef((props, ref) => (
  <button
    ref={ref}
    className="FancyButton"
    onClick={() => {
      console.log("Child button clicked");
    }}
  >
    {props.children}
  </button>
));

const RefsComponent = () => {
  const ref = React.createRef();

  const clickFunction = () => {
    ref.current.click();
  };

  return (
    <>
      <button
        onClick={() => {
          console.log("Parent Button clicked");
          clickFunction();
        }}
      >
        Parent button
      </button>
      <br />
      <hr />
      <FancyButton ref={ref}>Click me!</FancyButton>
    </>
  );
};

export default RefsComponent;
