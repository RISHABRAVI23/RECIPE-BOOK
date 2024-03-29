import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import "./SignUp.css";

export default function SignUp(props) {
	const [passShown, setPassShown] = useState(false);
	const [error, setError] = useState(false);
	function showPass() {
		setPassShown(!passShown);
	}
	function signUpFormSubmit(e) {
		e.preventDefault();
		let emailId = document.querySelector("#emailid").value;
		let username = document.querySelector("#username").value;
		let password = document.querySelector("#password").value;
		let data = new FormData();

		data.append("emailId", emailId);
		data.append("username", username);
		data.append("password", password);

		axios
			.post("http://localhost:8000/users/", data, {
				headers: { "content-type": "multipart/form-data" },
			})
			.then((response) => {
				let cookie_data = {
					loggedIn: true,
					loggedUsername: response.data.username,
				};
				Cookies.set("info", JSON.stringify(cookie_data), {
					expires: 5,
				});
				window.location = "/?signedIn=true";
			})
			.catch((error) => {
				setError(true);
			});
	}
	return (
		<div className="container my-3">
			{error ? (
				<div
					className="alert alert-danger alert-dismissible fade show"
					role="alert">
					<strong>There has been an error!!</strong> Check if you have
					already signed up. If your credentials are correct then we
					are facing some internal errors. Sorry for the problems. :(
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="alert"
						aria-label="Close"></button>
				</div>
			) : (
				""
			)}
			<form className="my-auto">
				<div className="mb-3">
					<label htmlFor="emailid" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="emailid"
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" className="form-text">
						I'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="username" className="form-label">
						Username (Display Name)
					</label>
					<input
						type="username"
						className="form-control"
						id="username"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						type={passShown ? "text" : "password"}
						className="form-control"
						id="password"
					/>
				</div>
				<div className="mb-3 form-check">
					<input
						type="checkbox"
						className="form-check-input"
						id="showPass"
						onClick={showPass}
					/>
					<label className="form-check-label" htmlFor="showPass">
						Show Password{" "}
						<i
							className="bi bi-eye-slash-fill"
							id="togglePassword"></i>
					</label>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={signUpFormSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
}
