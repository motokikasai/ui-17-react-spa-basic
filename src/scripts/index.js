// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

ReactDOM.render(
  React.createElement("h1", {}, "My awesome contacts list"),
  //   React.createElement("ul", {}, [React.createElement("li", {}, "Item ONE")]),
  document.querySelector("#app")
);
