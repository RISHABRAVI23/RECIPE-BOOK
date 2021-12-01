import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function UserProfile(props) {
	const [user] = useState(useParams().username);
	document.querySelector("title").innerHTML = `${user} | User |Recipe Book`;
	axios.get(`http://localhost:8000/users/${user}`).then((res) => {
		console.log(res);
	});
	return <div>This is userprofile of {user}</div>;
}
