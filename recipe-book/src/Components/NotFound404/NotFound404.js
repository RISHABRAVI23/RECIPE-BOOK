import React from "react";
import { Link } from "react-router-dom";
import NotFound404Image from "./NotFound404.jpg";

export default function NotFound404() {
	return (
		<div className="container center text-center">
			<img src={NotFound404Image} alt="Page Not Found" />
			<p>I am sorry I couldn't find that page.</p>
			<Link to="/" className="btn btn-primary">
				Go to home
			</Link>
		</div>
	);
}
