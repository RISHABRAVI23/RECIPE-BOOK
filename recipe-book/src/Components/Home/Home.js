import React from "react";
import Users from "./Users";

export default function Home() {
	const params = window.location.search;
	console.log(params);
	return (
		<div className="container">
			{params === "?signedUp=true" ? (
				<div
					class="alert alert-success alert-dismissible fade show my-3"
					role="alert">
					<strong>Successful!!!</strong> You can now sign in anytime
					and store your recipes here. Enjoy!!!
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="alert"
						aria-label="Close"></button>
				</div>
			) : (
				""
			)}
			<Users />
		</div>
	);
}
