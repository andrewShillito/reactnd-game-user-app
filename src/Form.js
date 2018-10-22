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
    console.log(this.state)
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
      <FormSubmitButton 
        handleAddUser={this.props.handleAddUser}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        username={this.state.username}
        checkInputValidity={this.checkInputValidity}
        checkUsernameValidity={this.checkUsernameValidity}
        />
    </div>
    )
  }
}

export default Form