import React from "react";
import FormTitle from "./FormTitle.js"
import FormSubmitButton from "./FormSubmitButton"

class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
  }
  handleInputUpdate = (target) => (
    this.setState(() => ({
      [target.name]: target.value
    }))
  )
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
          <legend/>
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name"
            value={this.state.firstName}
            onChange={(event) => this.handleInputUpdate(event.target)}
            required
            />
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={(event) => this.handleInputUpdate(event.target)}
            required
            />
          <input 
            type="text"
            name="username" 
            placeholder="username"
            value={this.state.username}
            onChange={(event) => this.handleInputUpdate(event.target)}
            required
            />      
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