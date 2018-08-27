import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
class App extends React.Component {
  handleTitleClick() {
    alert("yoou clicked the title");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", { onClick: this.handleTitleClick }, "Adpot Me"),
      React.createElement(Pet, {
        name: "Lina",
        animal: "Dog",
        breed: "Havanse"
      }),
      React.createElement(Pet, {
        name: "Prepper",
        animal: "bird",
        breed: "cockatiel"
      }),
      React.createElement(Pet, { name: "Doink", animal: "cat", breed: "mixed" })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
