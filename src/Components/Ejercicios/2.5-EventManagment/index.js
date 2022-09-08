import React, { useState } from "react";
import { Button, Container, Div } from "./eventManagment_style";

const EventManagment = () => {
  const [state, setState] = useState("Red");
  const [isActive, setIsActive] = useState(false);
  const handleChange = () => {
    setState((prevstate) => (prevstate === "Red" ? "Green" : "Red"));
  };
  const Activate = () => {
    setIsActive(true);
  };
  const Desactivate = () => {
    setIsActive(false);
  };
  return (
    <>
      <Container>
        <Button onClick={handleChange}>Click Me!</Button>
        <Div>State: {state}</Div>
      </Container>
      <Container>
        <Div onMouseOver={Activate} onMouseLeave={Desactivate}>
          Soy un div!
        </Div>
        <Div>{isActive && "Inside!"}</Div>
      </Container>
    </>
  );
};

export default EventManagment;
