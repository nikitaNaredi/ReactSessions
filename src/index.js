import React from "react";
import ReactDOM from "react-dom";
import PropsComponent from "./PropsComponent";
import ErrorBoundary from "./ErrorBoundary";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <PropsComponent></PropsComponent>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
