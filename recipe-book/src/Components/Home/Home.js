import React from "react";
import { Link } from "react-router-dom";
import Recipe from "./Recipe/Recipe";

export default function Home() {
	const params = window.location.search;
	document.querySelector("title").innerHTML = "Recipe Book";

	return (
		<div className="container">
			{params === "?signedUp=true" ? (
				<div
					className="alert alert-success alert-dismissible fade show my-3"
					role="alert">
					<strong>Sign Up Successful!!!</strong> You can now sign in
					anytime and store your recipes here. Enjoy!!!
					<Link
						to="/"
						type="button"
						className="btn-close"
						data-bs-dismiss="alert"
						aria-label="Close"></Link>
				</div>
			) : (
				""
			)}
			{params === "?signedIn=true" ? (
				<div
					className="alert alert-success alert-dismissible fade show my-3"
					role="alert">
					<strong>Sign In Successful!!!</strong> You can now create
					and store your recipes here anytime. Enjoy!!!
					<Link
						to="/"
						type="button"
						className="btn-close"
						data-bs-dismiss="alert"
						aria-label="Close"></Link>
				</div>
			) : (
				""
			)}
			<Recipe />
		</div>
	);
}
