import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Recipe from "./Recipe/Recipe";

export default function Home(props) {
	const params = window.location.search;
	document.querySelector("title").innerHTML = "Recipe Book | Recipes";
	const [recipes, setRecipes] = useState([]);
	const [error, setError] = useState(false);
	useEffect(() => {
		axios
			.get("http://localhost:8000/recipes/get-all-post/")
			.then((res) => {
				setRecipes(res.data);
			})
			.catch((err) => {
				setError(true);
			});
	}, []);
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
						aria-label="Close"></button>
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
						<b>Your Recipes</b>
					</u>
				</h1>
				<Link to="/cook-recipe" class="btn btn-success">
					<i class="bi bi-plus-circle"></i> Cook a New Recipe
				</Link>
			</div>
			<div className="container d-flex justify-content-around">
				{recipes.map((recipe) => {
					return (
						<Recipe
							created_by={recipe.created_by}
							title={recipe.title}
							desc={recipe.desc}
							recipe_image={recipe.recipe_image}
						/>
					);
				})}
			</div>
		</div>
	);
}
