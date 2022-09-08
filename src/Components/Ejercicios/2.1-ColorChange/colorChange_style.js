import styled from "styled-components";

export const ColorContainer = styled.h3`
  width: 300px;
  height: 30px;
  margin: auto;
  background-color: ${(props) => (props.color === "Red" ? "red" : "Green")};
`;
