import React from "react";
import axios from "axios";

export default function ShowNavUser(props) {
	axios
		.get(`http://localhost:8000/users/${props.loggedUser}`)
		.then((response) => {
			console.log(response.data);
		});
	return <div>Logged In</div>;
}
