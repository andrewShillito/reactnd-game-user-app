import React from "react";

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

export default UserCard