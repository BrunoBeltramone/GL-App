import React from "react";
import Example from "./Example";
import Navbar from "./Navbar";

const Routing = () => {
  return (
    <div>
    <Navbar />
    <div>
      <Example nombre="Roman Tinelli" edad={56} dni={"29.184.127"} />
      <Example />
    </div>
    </div>
  );
};

export default Routing;
