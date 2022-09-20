import React from "react";
import Example from "./Example";

const DefaultPropsComponent = () => {
  return (
    <div>
      <Example nombre="Roman Tinelli" edad={56} dni={"29.184.127"} />
      <Example />
    </div>
  );
};

export default DefaultPropsComponent;
