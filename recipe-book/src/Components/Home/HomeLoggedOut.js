import React from "react";
import { Link } from "react-router-dom";

export default function HomeLoggedOut() {
	return (
		<div className="container">
			<div
				className="alert alert-danger alert-dismissible fade show"
				role="alert">
				Please<strong> Sign Up/Sign </strong>In to proceed.
				<button
					type="button"
					className="btn-close"
					data-bs-dismiss="alert"
					aria-label="Close"></button>
			</div>
			<div
				className="container d-flex flex-column justify-content-center align-items-center"
				style={{ height: "78vh" }}>
				<h1>
					Please <span style={{ color: "green" }}>Sign In</span> or{" "}
					<span style={{ color: "green" }}>Sign Up</span> to continue
				</h1>
				<div className="container d-flex justify-content-center align-items-center">
					<Link
						className="btn btn-outline-success me-2"
						to="/sign-up">
						Sign Up
					</Link>
					<Link
						className="btn btn-sm btn-outline-secondary"
						type="button"
						to="/sign-in">
						Sign In
					</Link>
				</div>
			</div>
		</div>
	);
}
