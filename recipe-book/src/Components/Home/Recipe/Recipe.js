import Cookies from "js-cookie";
import React from "react";

export default function Recipe({ created_by, title, desc, recipe_image }) {
	return (
		<div class="card my-5" style={{ width: "18rem" }}>
			<img
				src={`http://localhost:8000${recipe_image}`}
				class="card-img-top"
				alt="..."
				style={{ height: "200px" }}
			/>
			<div class="card-body">
				<h4 class="card-title">{title}</h4>
				<p class="card-text">{desc}</p>
				<hr />
				Cook : {created_by} (
				{created_by === JSON.parse(Cookies.get("info")).loggedUsername
					? "You"
					: ""}
				)
				<hr />
				<div className="d-flex justify-content-around">
					<a href="/" class="btn btn-primary">
						<i class="bi bi-binoculars"></i> View
					</a>
					<a href="/" class="btn btn-danger">
						<i class="bi bi-trash"></i> Delete
					</a>
				</div>
			</div>
		</div>
	);
}
