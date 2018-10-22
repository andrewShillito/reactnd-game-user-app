import React from "react";

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

export default UserListTitle