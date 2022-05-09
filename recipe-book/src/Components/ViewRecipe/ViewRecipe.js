/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

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
					Please check if the url is correct. :( &nbsp;
					<Link to={"/"}>Go to Home Page</Link>
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="alert"
						aria-label="Close"></button>
				</div>
			) : (
				""
			)}
			{recipe !== undefined && (
				<div className="container d-flex flex-column align-items-center">
					<img
						alt="recipe image"
						id="recipe-image"
						style={{
							border: "1px solid grey",
							borderRadius: "10px",
							width: "200px",
							height: "200px",
							marginBottom: "30px",
						}}
						src={`http://localhost:8000${recipe.recipe_image}`}
					/>
					<u>
						<h1 style={{ marginBottom: "30px" }}>
							<strong>{recipe.title.toUpperCase()}</strong>
						</h1>
					</u>

					<div className="desc d-flex flex-column align-items-center">
						<u>
							<h2>Description</h2>
						</u>
						<p style={{ marginBottom: "30px" }}>{recipe.desc}</p>
					</div>
					<div className="ing-req d-flex flex-column align-items-center">
						<u>
							<h2>Ingredients Required</h2>
						</u>
						<ul type="circle" style={{ marginBottom: "30px" }}>
							{recipe.ingredients_req.map((ing) => {
								return <li>{ing}</li>;
							})}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}
