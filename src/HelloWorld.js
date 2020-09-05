import React from "react";

import Icon from "./icons/Icon.jsx";

const HelloWorld = () => {
  return (
    <>
      <h3>Hello World</h3>
      <p>
        <Icon svg="facebook" classes="svg-icon" title="Facebook" />
        <span>Danos like en facebook</span>
      </p>
    </>
  );
};

export default HelloWorld;
