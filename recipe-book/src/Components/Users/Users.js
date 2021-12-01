import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./User/User";

export default function Users() {
	const [users, setUsers] = useState([]);
	document.querySelector("title").innerHTML = "Users | Recipe Book";
	useEffect(() => {
		axios
			.get("http://localhost:8000/users/")
			.then((response) => setUsers(response.data));
	}, []);
	console.log("users component");
	return (
		<div className="container my-3">
			{users.forEach((user, index) => {
				return <User key={index + 1} username={user.username} />;
			})}
		</div>
	);
}
