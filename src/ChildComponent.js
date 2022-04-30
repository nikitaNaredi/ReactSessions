import React from "react";

// Whenever props changes Component rerenders but if value is used in useEffect the latest value is not updated.
const ChildComponent = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <div>Logged in!!</div>;
  }
  return <div>You need to Log in!!</div>;
};

export default ChildComponent;
