import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Recipe from "./Recipe/Recipe";

export default function Home() {
	const params = window.location.search;
	document.querySelector("title").innerHTML = "Recipe Book";
	const [recipes, setRecipes] = useState([]);
	const [error, setError] = useState(false);
	const navigate = useNavigate();
	function handleOnClick(e) {
		setTimeout(() => {
			navigate("/");
		}, 1000);
	}
	useEffect(() => {
		axios
			.get("http://localhost:8000/recipes/get-all-post/")
			.then((res) => {
				console.log(res.data[0]);
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
					<strong>There has been an error!!</strong> Sorry for the
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
						aria-label="Close"
						onClick={handleOnClick}></button>
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
						aria-label="Close"
						onClick={handleOnClick}></button>
				</div>
			) : (
				""
			)}
			<div className="my-5 text-center">
				<h1>Your Recipes</h1>
			</div>
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
	);
}
