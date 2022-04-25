import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ViewRecipe() {
	const [recipe, setRecipe] = useState();
	const [error, setError] = useState(false);

	const { id } = useParams();
	useEffect(() => {
		axios
			.get(`http://localhost:8000/recipes/${id}`)
			.then((res) => {
				// console.log(res.data);
				setRecipe(res.data);
			})
			.catch((err) => {
				// console.error(err);
				setError(true);
			});
	}, []);
	return (
		<div className="container my-3">
			{error ? (
				<div
					className="alert alert-danger alert-dismissible fade show"
					role="alert">
					It seems that this recipe <strong>DOES NOT EXIST</strong>{" "}
					Please check if the url is correct. :(
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="alert"
						aria-label="Close"></button>
				</div>
			) : (
				""
			)}
			{recipe !== undefined && <h1>{recipe.title}</h1>}
		</div>
	);
}
