// import userEvent from "@testing-library/user-event";
import React from "react";
import ReactDOM from "react-dom";

function DynamicListAndKeys(props) {
  const numberList = props?.numbers?.map((val) => <li key={val}>{val}</li>);
  return <ul>{numberList}</ul>;
}

ReactDOM.render(
  <DynamicListAndKeys numbers={[1, 2, 3]} />,
  document.getElementById("root")
);

export default DynamicListAndKeys;
