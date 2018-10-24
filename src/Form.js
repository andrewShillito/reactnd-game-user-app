import React from "react";
import FormTitle from "./FormTitle.js"
import FormInput from "./FormInput.js"
import UserListTitle from "./UserListTitle.js"
import UserCard from "./UserCard.js"

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
  checkInputValidity = (newUser) => {
    return Object.keys(this.state).every((field) => this.state[field].length)
  }
  render() {
    const newObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      gamesPlayed: Math.floor(Math.random()*8),
	  showGames: true,
    }
    return (
    <div id="app">
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
	  <div className="list-component">
        <UserListTitle/>
        {this.props.users.map((user) => (
          <UserCard 
            firstName={user.firstName}
            lastName={user.lastName}
            username={user.username}
            gamesPlayed={user.gamesPlayed}
			showGames={user.showGames}
			key={user.username}
            />
        ))}
      </div>
    </div>
    )
  }
}

export default Form