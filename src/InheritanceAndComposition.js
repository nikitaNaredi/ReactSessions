import React from "react";
import Game from "./Game";
import StateComponent from "./StateComponent";

function SplitSection(props) {
  return (
    <div className="SplitSection">
      <div className="SplitSection-top">{props.top}</div>
      <div className="SplitSection-bottom">{props.bottom}</div>
    </div>
  );
}

function InheritanceAndComposition() {
  return <SplitSection top={<Game />} bottom={<StateComponent />} />;
}

export default InheritanceAndComposition;
