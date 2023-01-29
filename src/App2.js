import React , {component} from "react";
import Custom3Component1 from "./Component2/Custom3Component";
import FirstComponent from "./Component2/FirstComponent"
import SecondComponent from "./Component2/SecondComponent";
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App2(){
    return(
    <>
    <FirstComponent/>
    <br />
    <SecondComponent/>
    <br />
    <Custom3Component1/>
    {/* <Custom3Component2/> */}
    
    </>
    
    )
}
export default App2 ;