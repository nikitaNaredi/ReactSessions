import React from "react";
import Game from "./Game";
import StateComponent from "./StateComponent";

function SectionComponent(props) {
  console.log("props", props);
  return (
    <div className="SplitSection">
      <div className="SplitSection-top">{props}</div>
      <div className="SplitSection-bottom">{props.bottom}</div>
      <div>{props.children}</div>
    </div>
  );
}

function InheritanceAndComposition() {
  return (
    <SectionComponent top={<Game />} bottom={<StateComponent />}>
      <h1>Hello!</h1>
    </SectionComponent>
  );
}

export default InheritanceAndComposition;
