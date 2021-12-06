import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./User/User";

export default function Users() {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(false);
	document.querySelector("title").innerHTML = "Users | Recipe Book";
	useEffect(() => {
		axios
			.get("http://localhost:8000/users/")
			.then((response) => {
				setUsers(response.data);
			})
			.catch((error) => {
				setError(error);
			});
	}, []);
	return (
		<div className="container my-3">
			{error ? (
				<div
					className="alert alert-danger alert-dismissible fade show"
					role="alert">
					<strong>There has been an error!!</strong> Please check if
					your credentials are correct. If so, then we might be
					experiencing some internal server problems or some server
					downtime. Sorry for the inconvenience. :(
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="alert"
						aria-label="Close"></button>
				</div>
			) : (
				""
			)}
			{users.map((u, i) => {
				console.log(u);
				return <User />;
			})}
		</div>
	);
}
