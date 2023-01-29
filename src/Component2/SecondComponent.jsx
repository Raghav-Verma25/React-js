// Custom component using class
import React, { Component } from 'react'


class SecondComponent extends React.Component{
    render()     // render method is used to call jsx
        {
            return(
                <div className='conatiner bg-info p-3'>
                <h2 className='text-warning text-center '>This is Second Component</h2>
                <h3 className='text-warning text-center '>Using React class</h3>
                </div>
            )
        }
}

export default SecondComponent;




