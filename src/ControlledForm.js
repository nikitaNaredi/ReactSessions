import React, { useState } from "react";

function ControlledForm(props) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    console.log("name ", name);
    e.preventDefault();
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ControlledForm;
