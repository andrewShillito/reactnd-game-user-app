import React from "react";

function ShowGamesButton(props) {
  return (
    <span>
      {props.showGamesPlayed 
         ? <button
         onClick={props.handleGameShow}
        >Hide Num Games Played</button> 
        : <button
        onClick={props.handleGameShow}
  		>Show Num Games Played</button>}
  	</span>
  )
}

export default ShowGamesButton