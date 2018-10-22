import React from "react";
import UserListTitle from "./UserListTitle.js";
import UserCard from "./UserCard.js"

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

export default UserList