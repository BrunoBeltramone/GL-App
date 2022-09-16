import React from "react";
import "./ReactEstilos.css";

const ReactEstilos = () => {
  return (
    <div className="Container">
      <div className="Header-Container">
        <div className="logo">LOGO</div>
        <div className="Website-Heading">Website Heading</div>
      </div>
      <div className="Menu">Menu</div>
      <div className="Sections">
            <div className="s1">Section 1</div>
            <div className="s2">Section 2</div>
            <div className="s3">Section 3</div>
      </div>
      <div className="Content">
        <div className="Page-Content">Page Content</div>
        <div className="Side-Bar">Side Bar</div>
      </div>
      <div className="Page-Footer">Page Footer</div>
    </div>
  );
};

export default ReactEstilos;
