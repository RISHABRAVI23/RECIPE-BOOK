import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

export default function SignUp(props) {
	const [passShown, setPassShown] = useState(false);
	const [error, setError] = useState(false);
	const navigate = useNavigate();
	function showPass() {
		setPassShown(!passShown);
	}
	function signUpFormSubmit(e) {
		e.preventDefault();
		let emailId = document.querySelector("#emailid").value;
		let username = document.querySelector("#username").value;
		let password = document.querySelector("#password").value;
		let data = {
			emailId: emailId,
			username: username,
			password: password,
		};
		axios
			.post("http://localhost:8000/users/", data)
			.then((response) => {
				// console.log(response);
				navigate("/?signedUp=true");
			})
			.catch((error) => {
				setError(true);
			});
	}
	return (
		<>
			{error ? (
				<div
					class="alert alert-danger alert-dismissible fade show"
					role="alert">
					<strong>There has been an error!!</strong> Check if you have
					already signed up.
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="alert"
						aria-label="Close"></button>
				</div>
			) : (
				""
			)}
			<div className="container my-3">
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
					<div className="mb-3 form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label
							className="form-check-label"
							htmlFor="exampleCheck1">
							Remember Me
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
		</>
	);
}
