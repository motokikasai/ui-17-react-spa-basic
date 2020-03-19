// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

const header = React.createElement("h1", {}, [
  React.createElement("span", {}, "My"),
  React.createElement("span", { style: { color: "hotpink" } }, " awesome"),
  React.createElement("span", {}, " contact list")
]);

const list = React.createElement("ul", { style: { color: "mistyrose" } }, [
  React.createElement("li", {}, [
    React.createElement("p", {}, "Valentine Torp"),
    React.createElement("a", { href: "#" }, "PHone: 555-2342"),
    React.createElement("p", {}, ""),
    React.createElement("a", {}, "Email: johnny@be.good")
  ])
]);

ReactDOM.render([header, list], document.querySelector("#app"));
