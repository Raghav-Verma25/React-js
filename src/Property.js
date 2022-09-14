import React from "react";
// import Pt from "prop-types"
const Property = (props) =>{
    return(
        <div>
            <h1>Hello , {props.name}</h1>
            <h2>My roll is , {props.roll}</h2>
        </div>
    );
};
// Property.propType = {
//     name : Pt.string
// };
export default Property;