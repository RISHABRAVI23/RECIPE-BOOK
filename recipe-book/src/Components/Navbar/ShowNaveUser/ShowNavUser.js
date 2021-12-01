import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ShowNavUser(props) {
	const [username, setUsername] = useState(props.loggedUser);
	const [userImage, setUserImage] = useState();
	axios
		.get(`http://localhost:8000/users/${props.loggedUser}`)
		.then((response) => {
			setUsername(response.data.username);
			setUserImage(response.data.profile_pic);
		});
	return (
		<div className="d-flex flex-row">
			<img
				src={`http://localhost:8000${userImage}`}
				className="img-thumbnail"
				alt="..."
				style={{
					borderRadius: "50%",
					width: "50px",
					height: "50px",
				}}
			/>
			<ul className="navbar-nav my-auto">
				<li className="nav-item dropdown my-auto">
					<Link
						to="#"
						id="navbarDarkDropdownMenuLink"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						className="my-auto mx-3 nav-link dropdown-toggle">
						{username}
					</Link>
					<ul
						className="dropdown-menu dropdown-menu-dark"
						aria-labelledby="navbarDarkDropdownMenuLink"
						style={{
							left: "-70px",
						}}>
						<li>
							<Link
								className="dropdown-item"
								to={`/profile/${username}`}>
								Profile
							</Link>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
}
