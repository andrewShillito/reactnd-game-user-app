import React from "react";

function FormInput(props) {
  return (
    <input 
    	name={props.name}
		value={props.value}
		placeholder={props.placeholder}
		onChange={(event) => props.handleInputUpdate(event.target)}
    />
  )
}

export default FormInput