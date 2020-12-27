import React from "react";
import { render } from "react-dom";
import GenerateLettersByDragCanvas from "../../src/GenerateLettersByDragCanvas";

const App = () => (
  <>
    <GenerateLettersByDragCanvas letters={"example letters"} />
  </>
);

render(<App />, document.getElementById("root"));
