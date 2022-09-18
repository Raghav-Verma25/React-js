import React   from "react";
import Custom from "./CustomHook"
//Simple String
 function App1() {
    const data = Custom();
    return(
        <React.Fragment>
            <h2>Count up : {data.count}</h2>
            <button onClick={data.handleClick}>Increment using Custom</button>
        </React.Fragment>
    )

}
export default App1;