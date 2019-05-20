import React from "react";
import ReactDOM from "react-dom";
import HelloApp from "./HelloApp";

const App = () => (
  <div className="container justify-content-md-center">
    <HelloApp />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
