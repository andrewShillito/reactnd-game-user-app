import React from "react";

function FormSubmitButton(props) {
  const newObj = {
    firstName: props.firstName,
    lastName: props.lastName,
    username: props.username,
    gamesPlayed: Math.floor(Math.random()*8),
  }
  return (
    <button
      className="form-submit-button"
      onClick={props.checkUsernameValidity(props.username) ? () => props.handleAddUser(newObj) : () => alert("Usernames must be unique")}
      disabled={!props.checkInputValidity(newObj)}
      >
      Submit
    </button>
    )
}

export default FormSubmitButton