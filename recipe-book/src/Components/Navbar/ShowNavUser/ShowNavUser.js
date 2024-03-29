import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function ShowNavUser(props) {
	const [username, setUsername] = useState();
	const [userImage, setUserImage] = useState();
	const url = `http://localhost:8000/users/${props.loggedUser}`;
	useEffect(() => {
		axios.get(url).then((response) => {
			setUsername(response.data.username);
			setUserImage(response.data.profile_pic);
		});
	}, [url]);
	const navigate = useNavigate();
	function logout(e) {
		Cookies.remove("info");
		props.setLoggedIn(false);
		navigate("/");
	}
	function deleteUser(e) {
		let confirmation = window.confirm(
			`Are you sure you want to delete the user - ${username}`
		);
		if (!confirmation) {
			return;
		}

		axios.delete(`http://localhost:8000/users/${username}`).then(() => {
			logout();
		});
	}
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
					pointerEvents: "none",
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
						<li>
							<button className="dropdown-item" onClick={logout}>
								Logout
							</button>
						</li>
						<li>
							<button
								className="dropdown-item text-danger"
								onClick={deleteUser}>
								Delete User
							</button>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
}
