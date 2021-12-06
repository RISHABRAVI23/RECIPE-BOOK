import React from "react";
import { Link } from "react-router-dom";

export default function User(props) {
	console.log("User.js component.");
	return (
		<div>
			<div className="card">
				<Link to="/">
					<div className="card-body">
						Use this kinda element to show user: {props}
					</div>
				</Link>
			</div>
		</div>
	);
}
