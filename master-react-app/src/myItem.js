import React from "react"

function User(props) {
	return(
		<div>
		<h1>{props.value} : {props.age}</h1>
		<button onClick={props.delEvent}>delete</button>
		</div>
	)
}

export default User