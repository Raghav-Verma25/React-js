import React , {component} from "react";
import Custom3Component1 from "./Component2/Custom3Component";
import FirstComponent from "./Component2/FirstComponent"
import SecondComponent from "./Component2/SecondComponent";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Student from "./Component2/Student";

function App2(){
    return(
    <>
    <FirstComponent/>
    <br />
    <SecondComponent/>
    <br />
    <Custom3Component1/>
    
    <Student name="Raghav" age={20}/>
    <Student name="Adarsh" age={21}/>
    <Student name="Shailesh" age={20}/>
    </>
    
    )
}
export default App2 ;