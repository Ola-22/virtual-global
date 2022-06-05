import ReactDOM from "react-dom";

// import "./styles.css";

import React, { Component } from "react";
import Typing from "react-typing-animation";

function App() {
  return (
    <div className="App">
      <h1>Test Elghazali</h1>
      <Typing loop>
        <span>Ahmed.</span>
        <span>Ahmed 2</span>
        <Typing.Reset count={0} delay={500} />
      </Typing>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
