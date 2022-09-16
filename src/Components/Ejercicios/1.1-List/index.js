import React from "react";
import { Container } from "./list_style";

class List extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <Container>
        <h1>List</h1>
        <ul>
          <li>Topic 1</li>
          <li>Topic 2</li>
          <li>Topic 3</li>
        </ul>
      </Container>
    );
  }
}

export default List;
