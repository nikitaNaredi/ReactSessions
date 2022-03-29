import React from "react";
import ReactDOM from "react-dom";
import UseRefComponent from "./UseRefComponent";
import ErrorBoundary from "./ErrorBoundary";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <UseRefComponent></UseRefComponent>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
