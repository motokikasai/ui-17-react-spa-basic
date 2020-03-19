// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

let randomName = Faker.name.findName();
let randomEmail = Faker.internet.email();
let randomPhone = Faker.phone.phoneNumber();

const header = React.createElement("h1", {}, [
  React.createElement("span", { style: { color: "orange" } }, "My"),
  React.createElement("span", { style: { color: "hotpink" } }, " awesome"),
  React.createElement("span", { style: { color: "green" } }, " contact list")
]);

const list = React.createElement("ul", { style: { color: "#646464" } }, [
  React.createElement("li", {}, [
    React.createElement("h3", {}, randomName),
    React.createElement("p", {}, randomPhone),
    React.createElement("p", {}, randomEmail)
  ])
]);

ReactDOM.render([header, list], document.querySelector("#app"));
