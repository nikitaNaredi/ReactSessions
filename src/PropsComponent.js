import React from "react";
import ReactDOM from "react-dom";
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <div>Logged in!!</div>;
  }
  return <div>You need to Log in!!</div>;
}
ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById("root")
);
