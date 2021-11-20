import React from "react";

export default function SignUp() {
	function signUpFormSubmit(e) {
		e.preventDefault();
		let emailId = document.querySelector("#emailid").value;
		let username = document.querySelector("#username").value;
		let password = document.querySelector("#password").value;
		console.log(emailId, username, password);
	}
	return (
		<div className="container my-auto">
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
						type="password"
						className="form-control"
						id="password"
					/>
				</div>
				<div className="mb-3 form-check">
					<input
						type="checkbox"
						className="form-check-input"
						id="exampleCheck1"
					/>
					<label className="form-check-label" htmlFor="exampleCheck1">
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
	);
}
