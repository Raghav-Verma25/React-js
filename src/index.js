import React from "react";
import ReactDOM from "react-dom";
// import el from "./App"
import App from "./App"
import Property from "./Property";
import Propertywithclass from "./Propertywithclass";
import State from "./GeekyShow/State"
import State2 from "./GeekyShow/State2"

//Using component

// ReactDOM.render(el,document.getElementById("root"))
// ReactDOM.render(<App />,document.getElementById("root"));

// ReactDOM.render(ele11 , document.getElementById("root1"));

// ReactDOM.render(<Property name="Raghav" roll="14"/> , document.getElementById("root1"));
// ReactDOM.render(<Propertywithclass  roll="4"/> , document.getElementById("root2"));

ReactDOM.render(<State rollno="140"/> , document.getElementById("state-root-1"))
ReactDOM.render(<State2 rollno="14"/> , document.getElementById("state-root-2"))
