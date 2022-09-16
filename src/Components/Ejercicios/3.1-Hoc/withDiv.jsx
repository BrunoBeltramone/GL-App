import React from "react";

const withDiv = (Component, options) => (props) =>
(
      <div style={{border:"2px solid black", borderRadius: options.border, width:"200px", }}>
        {console.log(props)}
        {console.log(options.border)}
        <Component {...props} />
      </div>
  );

export default withDiv;
