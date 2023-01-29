import React from 'react'

export default function Student(props) {
  return (
    <div>
        <div className='bg-info m-2 p-3'>Hello this is {props.name} and age is {props.age}</div>
    </div>
  )
}
