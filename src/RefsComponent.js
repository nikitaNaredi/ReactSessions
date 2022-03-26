import React from "react";

const FancyButton = React.forwardRef((props, ref) => (
  <button
    ref={ref}
    className="FancyButton"
    onClick={() => {
      console.log("inside click");
    }}
  >
    {props.children}
  </button>
));

const RefsComponent = () => {
  const ref = React.createRef();

  return (
    <>
      <div
        onClick={() => {
          ref.current.click();
        }}
      >
        Hello
      </div>
      <button ref={ref}>Inner button</button>
      <br />
      <hr />
      <FancyButton ref={ref}>Click me!</FancyButton>
    </>
  );
};

export default RefsComponent;
