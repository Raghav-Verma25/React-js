import React from "react";
import ReactDOM from "react-dom";
// import el from "./App"
import App from "./App"
import Property from "./Property";
import Propertywithclass from "./Propertywithclass";
import State from "./GeekyShow/State"
import State2 from "./GeekyShow/State2"
import EventHandling from "./component/EventHandling"
import EventHandling2 from "./component/EventHandling2"
import UpdateState from "./component/UpdateState"
// import Student from "./component/Student "
// import Marks from "./component/Marks"
import HooksUseState from "./GeekyShow/HooksUseState"
import HookUseEffect from "./GeekyShow/HookUseEffect"
import App1 from "./GeekyShow/App1"
import GuestApp from "./GeekyShow/ConditionalRendering/GuestApp"
import List from "./component/List"
import KeyApp from "./GeekyShow/Keys/KeyApp"
import Inline from "./GeekyShow/Styling Component/Inline"
import Inline2 from "./GeekyShow/Styling Component/Inline2"
// import External from "./GeekyShow/Styling Component/External"
import External2 from "./GeekyShow/Styling Component/External2"
import ModuleApp from "./GeekyShow/Styling Component/module Styling/ModuleApp";
// import ModuleApp from "./GeekyShow/Styling Component/module Styling/ModuleApp"

//Using component

// ReactDOM.render(el,document.getElementById("root"))
// ReactDOM.render(<App />,document.getElementById("root"));

// ReactDOM.render(ele11 , document.getElementById("root1"));

// ReactDOM.render(<Property name="Raghav" roll="14"/> , document.getElementById("root1"));
// ReactDOM.render(<Propertywithclass  roll="4"/> , document.getElementById("root2"));

ReactDOM.render(<State rollno="140"/> , document.getElementById("state-root-1"))
ReactDOM.render(<State2 rollno="14"/> , document.getElementById("state-root-2"))
ReactDOM.render(<EventHandling name="Adarsh"/> , document.getElementById("event-root-3"));
ReactDOM.render(<EventHandling2 /> , document.getElementById("event-root-4"));
ReactDOM.render(<UpdateState /> , document.getElementById("update-root-5"));
// ReactDOM.render(<Student /> , document.getElementById("update-root-6"));
// ReactDOM.render(<Marks /> , document.getElementById("update-root-7"));
 ReactDOM.render(<HooksUseState /> , document.getElementById("update-root-7"));
 ReactDOM.render(<HookUseEffect/> , document.getElementById("effect"))
 ReactDOM.render(<App1/> , document.getElementById("custom"))
 ReactDOM.render(<GuestApp register={false}/> , document.getElementById("condition-1") )
 ReactDOM.render(<List /> , document.getElementById("list"))
 const arrValues =[111,222,333,444];
 ReactDOM.render(<KeyApp numbers={arrValues}/> , document.getElementById("key"))
 ReactDOM.render(<Inline/> , document.getElementById("inline"))
 ReactDOM.render(<Inline2/> , document.getElementById("external"))
//  ReactDOM.render(<External/> , document.getElementById("ex-external"))
 ReactDOM.render(<External2/> , document.getElementById("external-2"))
 ReactDOM.render(<ModuleApp /> , document.getElementById("module"))
