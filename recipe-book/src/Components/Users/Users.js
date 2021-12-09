import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./User/User";

export default function Users() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:8000/users")
			.then((res) => {
				console.log(res.data);
				setUsers(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className="container">
			{users.map((user) => {
				console.log(user);
				return <User key={user.id} username={user.username} />;
			})}
		</div>
	);
}
