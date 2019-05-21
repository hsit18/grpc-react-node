import React from "react";
import ReactDOM from "react-dom";

import HelloApp from "./HelloApp";
import UserApp from "./UserApp";

const App = () => (
  <div className="container justify-content-md-center">
    <HelloApp />
    <UserApp />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
