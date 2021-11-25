import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Users() {
	const [users, setUsers] = useState([]);
	document.querySelector("title").innerHTML = "Users | Recipe Book";
	useEffect(() => {
		axios
			.get("http://localhost:8000/users/")
			.then((response) => setUsers(response.data));
	}, []);
	return (
		<div className="container my-3">
			users here
			{users !== []
				? users.forEach((user) => {
						console.log(user);
				  })
				: ""}
		</div>
	);
}
