import React, { useState } from "react";
import axios from "axios";

export default function ShowNavUser(props) {
	const [username, setUsername] = useState(props.loggedUser);
	const [userImage, setUserImage] = useState();
	axios
		.get(`http://localhost:8000/users/${props.loggedUser}`)
		.then((response) => {
			setUserImage(response.data.profile_pic);
		});
	return (
		<div className="d-flex flex-row">
			<img
				src={`http://localhost:8000${userImage}`}
				class="img-thumbnail"
				alt="..."
				style={{
					borderRadius: "50%",
					width: "50px",
					height: "50px",
				}}
			/>
			<h5
				className="my-auto mx-3"
				style={{
					margin: "auto",
				}}>
				{username}
			</h5>
		</div>
	);
}
