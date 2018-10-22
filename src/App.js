import React from 'react';
import './App.css';
import Header from "./Header.js"
import Form from "./Form.js"
import UserList from "./UserList.js"

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
      <div id="app-container">
        <Header />
        <div id="app">
          <Form 
            handleAddUser={this.handleAddUser}
            users={this.state.users}
          />
          <UserList 
          	users={this.state.users}
          />
        </div>
	  </div>
    )
  }
}

export default App;
