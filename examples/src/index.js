import React from "react";
import { render } from "react-dom";
import GenerateLettersByDragCanvas from "react-p5-components";

const App = () => (
  <>
    <GenerateLettersByDragCanvas
      letters={"example letters"}
      height={500}
      width={500}
      font={"Georgia"}
      fontColor={"#000000"}
      fontSizeMin={10}
      backgroundColor={"#CCCCCC"}
    />
  </>
);

render(<App />, document.getElementById("root"));
