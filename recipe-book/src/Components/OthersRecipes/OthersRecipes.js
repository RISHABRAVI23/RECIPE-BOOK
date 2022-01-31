import React, { useEffect, useState } from "react";
import Recipe from "../Home/Recipe/Recipe";
import axios from "axios";

export default function OthersRecipes() {
	const [recipes, setRecipes] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		axios
			.get(`http://localhost:8000/recipes/get-all-post`)
			.then((res) => {
				console.log(res.data);
				setRecipes(res.data.reverse());
			})
			.catch((err) => {
				setError(true);
			});
	}, []);

	function handleDelete(id, title) {
		let confirmation = window.confirm(
			`Are you sure you want to delete recipe: ${title}`
		);
		if (confirmation) {
			axios
				.delete(`http://localhost:8000/recipes/${id}`)
				.then((res) => console.log(res))
				.catch((err) => {
					setError(true);
				})
				.finally(async () => {
					axios
						.get("http://localhost:8000/recipes/get-all-post")
						.then((res) => setRecipes(res.data.reverse()))
						.catch((err) => setError(true));
				});
		}
	}
	return (
		<div className="container">
			{error ? (
				<div
					className="alert alert-danger alert-dismissible fade show"
					role="alert">
					<strong>There was an Error!!</strong> Sorry for the
					inconvenience. :(
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="alert"
						aria-label="Close"></button>
				</div>
			) : (
				""
			)}
			<div className="my-5 text-center">
				<h1>
					<u>
						<b>Other's Recipes</b>
					</u>
				</h1>
			</div>
			<div className="container d-flex justify-content-around">
				{recipes.map((recipe, i) => {
					return (
						<Recipe
							key={i}
							id={recipe.id}
							created_by={recipe.created_by}
							title={recipe.title}
							desc={recipe.desc}
							recipe_image={recipe.recipe_image}
							handleDelete={handleDelete}
						/>
					);
				})}
			</div>
		</div>
	);
}
