import React from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu";
import Mtop from "./Mtop";
import Content from "./Content";

import "./index.css";

function App() {
  return (
    <div className="wrapper">
      <Menu />
      <div id="content">
        <Mtop />
        <Content />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);