import React, { useState } from "react";

const Item = ({ descripcion }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div>
      <span style={{ textDecoration: isCompleted ? "line-through" : "" }}>
        {descripcion}{" "}
      </span>
      <input
        type="checkbox"
        checked={isCompleted}
        onClick={() => setIsCompleted(!isCompleted)}
      />
    </div>
  );
};

export default Item;
