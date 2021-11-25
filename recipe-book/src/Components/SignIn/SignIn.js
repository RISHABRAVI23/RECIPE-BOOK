import axios from "axios";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function SignIn() {
	const [passShown, setPassShown] = useState(false);
	const [error, setError] = useState(false);
	// const navigate = useNavigate();
	function showPass() {
		setPassShown(!passShown);
	}

	function signInFormSubmit(event) {
		event.preventDefault();
		let username = document.querySelector("#username").value;
		let password = document.querySelector("#password").value;

		axios
			.get(`http://localhost:8000/users/${username}`)
			.then((response) => {
				console.log(response.data);
			});
	}

	return (
		<>
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
			<div className="container my-3">
				<form>
					<div className="mb-3">
						<label htmlFor="username" className="form-label">
							Username
						</label>
						<input
							type="text"
							className="form-control"
							id="username"
							aria-describedby="emailHelp"
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
							id="exampleCheck1"
							onClick={showPass}
						/>
						<label
							className="form-check-label"
							htmlFor="exampleCheck1">
							Show Password{" "}
							<i
								className="bi bi-eye-slash-fill"
								id="togglePassword"></i>
						</label>
					</div>
					<button
						type="submit"
						className="btn btn-primary"
						onClick={signInFormSubmit}>
						Submit
					</button>
				</form>
			</div>
		</>
	);
}
