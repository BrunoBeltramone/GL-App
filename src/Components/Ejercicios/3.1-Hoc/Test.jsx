import React from "react";

const Test = ({ text }) => {
  return (
    <>
      <div style={{border:"2px solid black", width:"200px", height:"200px"}}>
        {text}
      </div>
    </>
  );
};

export default Test;
