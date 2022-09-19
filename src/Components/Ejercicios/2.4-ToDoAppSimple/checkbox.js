import React from "react";

const Checkbox = ({ descripcion }) => {
  return (
    <li style={{margin:"30px"}}>
      <label>{descripcion}</label>
      <input type="checkbox" />
    </li>
  );
};

export default Checkbox;
