import React from "react";

function UserCard(props) {
  return (
    <div className="user-card" key={props.username}>
      <div className="user-card-text">
        <span className="name">{`${props.firstName} ${props.lastName}`}</span>
        <span className="username">{props.username}</span>
        {props.showGamesPlayed 
          ? <span className="games-played">{props.gamesPlayed}<button>{`Show games played`}</button></span>
          : <span className="games-played"><button>{`Show games played`}</button></span>
        }
      </div>
    </div>
  )
}

export default UserCard