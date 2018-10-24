import React from "react";

class UserCard extends React.Component {
  state = {
  	showGames: this.props.showGames,
  }
  toggleShowGames = () => {
    this.setState((prevState) => ({
      showGames: !(prevState.showGames)
    }))
  }
  render() {
    console.log(this.props)
	console.log(this.state)
    return (
      <div className="user-card" key={this.props.username}>
        <div className="user-card-text">
          <span className="name">{`${this.props.firstName} ${this.props.lastName}`}</span>
          <span className="username">{this.props.username}</span>
          {this.state.showGames
            ? <span className="games-played">{this.props.gamesPlayed}<button
				onClick={this.toggleShowGames}
				>{`Hide games played`}</button></span>
            : <span className="games-played"><button
				onClick={this.toggleShowGames}
				>{`Show games played`}</button></span>
          }
        </div>
      </div>
    )
  }
}

export default UserCard