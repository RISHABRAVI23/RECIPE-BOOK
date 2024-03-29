import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";

export default function Recipe({
	id,
	created_by,
	title,
	desc,
	recipe_image,
	handleDelete,
}) {
	return (
		<div className="card my-5" style={{ width: "18rem" }}>
			<img
				src={`http://localhost:8000${recipe_image}`}
				className="card-img-top mx-auto"
				alt="..."
				style={{ height: "200px", width: "200px" }}
			/>
			<div className="card-body">
				<h4 className="card-title">{title}</h4>
				<p className="card-text">{desc}</p>
				<hr />
				Cook : {created_by}
				{created_by === JSON.parse(Cookies.get("info")).loggedUsername
					? " (You)"
					: ""}
				<hr />
				<div className="d-flex justify-content-around">
					<Link className="btn btn-primary" to={`/view/${id}`}>
						<i className="bi bi-binoculars"></i> View
					</Link>
					<button
						className="btn btn-danger"
						onClick={() => handleDelete(id, title)}>
						<i className="bi bi-trash"></i> Delete
					</button>
				</div>
			</div>
		</div>
	);
}
