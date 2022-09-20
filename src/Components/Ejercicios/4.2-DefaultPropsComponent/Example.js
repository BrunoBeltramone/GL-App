import React from "react";

const Example = (props) => {
  return (
    <div>
      <div style={{ margin: "100px" }}>
        {props.nombre === "GlobalLogic" ? (
          <h1>Usando DefaultProps (no paso Props)</h1>
        ) : (
          <h1>Pasando Valores por Props</h1>
        )}
        <div>Nombre: {props.nombre}</div>
        <div>Edad: {props.edad}</div>
        <div>Dni: {props.dni}</div>
      </div>
    </div>
  );
};

Example.defaultProps = {
  nombre: "GlobalLogic",
  edad: 18,
  dni: "0.000.000",
};

export default Example;
