import React from "react";
import ReactDom from "react-dom";
import * as Ap from "./App";

ReactDom.render(
  <div>
    <Ap.App />
    <Ap.App1 />
    <Ap.Note />
  </div>,
  document.getElementById("root")
);
