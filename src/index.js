import React from "react";
import ReactDOM from "react-dom";
// import InheritanceAndComposition from "./InheritanceAndComposition";
// import ErrorBoundary from "./ErrorBoundary";
// import InheritanceAndComposition from "./InheritanceAndComposition";
import RefsComponent from "./RefsComponent";
ReactDOM.render(
  // <ErrorBoundary>
  // <InheritanceAndComposition numbers={[1, 2, 3]} />,
  // </ErrorBoundary>,
  <React.StrictMode>
    <RefsComponent></RefsComponent>
  </React.StrictMode>,
  document.getElementById("root")
);
