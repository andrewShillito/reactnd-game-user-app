import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/


class App extends React.Component {
  state = {
    users: [],
  }
  handleAddUser = (newUser) => (
    this.setState((prevState) => ({
      users: prevState.users.concat(newUser)
    }))
  )
  render() {
    console.log("users:", this.state.users)
    return (
      <div id="app">
      <Header />
        <div id="left-column">
          <Form 
            handleAddUser={this.handleAddUser}
            users={this.state.users}
            />
        </div>
        <div id="right-column">        
          <UserList 
            users={this.state.users}
            />
        </div>
      </div>
    )
  }
}

function Header(props) {
  return (
  	<header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">ReactND - Coding Practice</h1>
	</header>
  )
}

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

function FormTitle(props) {
  return (
    <h1 className="form-title">Add New User</h1>
  )
}

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

class UserList extends React.Component {
  state = {
    showGamesPlayed: true,
  }
  handleGameShow = () => {
    this.setState((prevState) => ({
      showGamesPlayed: !(prevState.showGamesPlayed)
    }))
  }
  render() {
    return (
      <div className="list-component">
        <UserListTitle 
          showGamesPlayed={this.state.showGamesPlayed}
          handleGameShow={this.handleGameShow}
          />
        {this.props.users.map((user) => (
          <UserCard 
            firstName={user.firstName}
            lastName={user.lastName}
            username={user.username}
            gamesPlayed={user.gamesPlayed}
            showGamesPlayed={this.state.showGamesPlayed}
            />
        ))}
      </div>
    )
  }
}

function UserListTitle(props) {
  return (
    <h1 className="user-list-title">User List
      <span>
        {props.showGamesPlayed 
          ? <button
              onClick={props.handleGameShow}
              >Hide Num Games Played</button> 
          : <button
              onClick={props.handleGameShow}
              >Show Num Games Played</button>}
      </span>
    </h1>
  )
}

function UserCard(props) {
  return (
    <div className="user-card" key={props.username}>
      <p className="user-card-text">
        <div className="name">
          <span>{props.firstName}</span>
          <br />
          <span>{props.lastName}</span>
        </div>
        <span>{props.username}</span>
        {props.showGamesPlayed 
          ? <span>{props.gamesPlayed}</span>
          : <span></span>
        }
      </p>
    </div>
  )
}


export default App;
