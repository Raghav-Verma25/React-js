import React from "react";
import ReactDOM from "react-dom";
// import el from "./App"
import App from "./App"
import Property from "./Property";
import Propertywithclass from "./Propertywithclass";

//Using component

// ReactDOM.render(el,document.getElementById("root"))
ReactDOM.render(<App />,document.getElementById("root"));

// ReactDOM.render(ele11 , document.getElementById("root1"));

ReactDOM.render(<Property name="Raghav" roll="14"/> , document.getElementById("root1"));
ReactDOM.render(<Propertywithclass  roll="4"/> , document.getElementById("root2"));