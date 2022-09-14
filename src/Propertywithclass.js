import React, { Component } from 'react'
import Ptc from "prop-types"
class Propertywithclass extends Component{
    render(){
    return(
        <div>
            <h3>Friend Name is , {this.props.name}</h3>
            <h3>Friend roll is , {this.props.roll}</h3>
        </div>
    );
}
}
// Propertywithclass.propType = {
//     name : Ptc.string
// };
Propertywithclass.propType = {
    name : Ptc.string.isRequired
};
Propertywithclass.defaultProps = {
    name : "geeky"
};

export default Propertywithclass;