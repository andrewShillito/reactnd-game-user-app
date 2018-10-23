import React from "react";
import FormTitle from "./FormTitle.js"
import FormSubmitButton from "./FormSubmitButton.js"
import FormInput from "./FormInput.js"

class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
  }
  handleInputUpdate = (target) => {
    this.setState(() => ({
      [target.name]: target.value
    }))
  }
  clearAllInputs = () => (
    this.setState(() => ({
      firstName: '',
      lastName: '',
      username: '',
    }))
  )
  checkUsernameValidity = (newUsername) => {
    for (let user of this.props.users) {
      if (user.username === newUsername) {
        return false;
      }
    }
    return true;
  }
  checkInputValidity = (newObj) => {
    return Object.keys(newObj).every((key) => newObj[key])
  }
  render() {
    const newObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      gamesPlayed: Math.floor(Math.random()*8),
    }
    return (
    <div className="form-component">
      <FormTitle />
      <form className="user-form">
     	{Object.keys(this.state).map((name) => {
      	  return (
            <FormInput 
              name={name}
              placeholder={name}
			  value={this.state.name}
			  key={name}
			  handleInputUpdate={this.handleInputUpdate}
			  />
      		)
    	})}
      </form>
      <button 
        className="form-submit-button"
        onClick={this.checkUsernameValidity(this.state.username) ? () => this.props.handleAddUser(newObj) : () => alert("Usernames must be unique")}
        disabled={!this.checkInputValidity(newObj)}
      >
      Submit
	  </button>
    </div>
    )
  }
}

export default Form