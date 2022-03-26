import React from "react";
import ReactDOM from "react-dom";

function DynamicListAndKeys(props) {
  const numberList = props.numbers.map((val) => <li>{val}</li>);

  return <ul>{numberList}</ul>;
}
ReactDOM.render(
  <DynamicListAndKeys numbers={[1, 2, 3]} />,
  document.getElementById("root")
);
