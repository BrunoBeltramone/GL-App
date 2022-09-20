import React from "react";
import PropTypes from "prop-types";

const Example = (props) => {
  return (
    <div style={{ margin: "150px" }}>
      <h1>PropTypes</h1>
      <div>Nombre: {props.nombre}</div>
      <div>Edad: {props.edad}</div>
      <div>Dni: {props.dni}</div>
    </div>
  );
};

Example.propTypes = {
  nombre: PropTypes.string,
  edad: PropTypes.number,
  dni: PropTypes.number,
};

export default Example;
