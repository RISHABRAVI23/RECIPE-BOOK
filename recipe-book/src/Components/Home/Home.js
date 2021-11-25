import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
	const params = window.location.search;
	const navigate = useNavigate();
	const handleOnclick = (e) => {
		navigate("/");
	};
	document.querySelector("title").innerHTML = "Recipe Book";

	return (
		<div className="container">
			{params === "?signedUp=true" ? (
				<div
					className="alert alert-success alert-dismissible fade show my-3"
					role="alert">
					<strong>Sign Up Successful!!!</strong> You can now sign in
					anytime and store your recipes here. Enjoy!!!
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="alert"
						aria-label="Close"
						onClick={handleOnclick}></button>
				</div>
			) : (
				""
			)}
			Recipes will come here
		</div>
	);
}
