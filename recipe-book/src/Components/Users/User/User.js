import React from "react";
import { Link } from "react-router-dom";

export default function User(props) {
	console.log("User.js component.");
	console.log(props.username);
	return (
		<div className="card my-3">
			<Link
				to="/"
				style={{
					textDecoration: "none",
				}}>
				<div className="card-body text-dark">
					Use this kinda element to show user: {props.username}
				</div>
			</Link>
		</div>
	);
}
