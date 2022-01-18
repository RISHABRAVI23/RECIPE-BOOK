import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Recipe from "./Recipe/Recipe";

export default function Home(props) {
	const params = window.location.search;
	document.querySelector("title").innerHTML = "Recipe Book | Recipes";
	const [recipes, setRecipes] = useState([]);
	const [error, setError] = useState(false);
	// const [prevPage, setPrevPage] = useState();
	// const [nextPage, setNextPage] = useState();
	// const [currentPage, setCurrentPage] = useState();

	useEffect(() => {
		axios
			.get(`http://localhost:8000/recipes/get/${props.loggedUser}`)
			.then((res) => {
				console.log(res.data.reverse());
				setRecipes(res.data.reverse());
			})
			.catch((err) => {
				setError(true);
			});
	}, [props.loggedUser]);

	function handleDelete(id, title) {
		let confirmation = window.confirm(
			`Are you sure you want to delete recipe: ${title}`
		);
		if (confirmation) {
			axios
				.delete(`http://localhost:8000/recipes/${id}`)
				.then((res) => setRecipes(res.data.reverse()))
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
	function checkInput(e) {
		if (document.querySelector("input.search").value === "") {
			document
				.querySelector("button.search-button")
				.setAttribute("disabled", "true");
		} else if (document.querySelector("input.search").value === "‎") {
			document
				.querySelector("button.search-button")
				.setAttribute("disabled", "true");
		} else {
			document
				.querySelector("button.search-button")
				.removeAttribute("disabled");
		}
	}

	function searchRecipes() {
		let result = [];
		let searchTerm = document.querySelector("input.search").value;
		recipes.forEach((recipe) => {
			if (recipe.title.includes(searchTerm)) {
				result.push(recipe);
			} else if (recipe.desc.includes(searchTerm)) {
				result.push(recipe);
			} else if (recipe.created_by.includes(searchTerm)) {
				result.push(recipe);
			} else if (recipe.precautions.includes(searchTerm)) {
				result.push(recipe);
			}
			recipe.ingredients_req.forEach((ing) => {
				if (ing.includes(searchTerm)) {
					result.push(recipe);
				}
			});
			recipe.procedure.forEach((step) => {
				if (step.includes(searchTerm)) {
					result.push(recipe);
				}
			});
		});
		console.log(result);
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
				<Link to="/cook-recipe" className="btn btn-success">
					<i className="bi bi-plus-circle"></i> Cook a New Recipe
				</Link>
			</div>
			<form
				className="d-flex"
				onSubmit={(e) => {
					e.preventDefault();
					searchRecipes();
				}}>
				<input
					className="form-control me-2 search"
					type="text"
					placeholder="Search"
					aria-label="Search"
					onChange={checkInput}
				/>
				<button
					className="btn btn-outline-success search-button"
					type="submit"
					disabled>
					Search
				</button>
			</form>
			<div className="container d-flex justify-content-around">
				{recipes.length > 0 ? (
					recipes.map((recipe, i) => {
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
					})
				) : (
					<h4 className="my-4">
						There are no Recipes made by you. Check out{" "}
						<Link to="/others-recipes" className="link-primary">
							Other's recipes
						</Link>{" "}
						or{" "}
						<Link to="cook-recipe" className="link-primary">
							Add your own Recipe
						</Link>
					</h4>
				)}
			</div>
		</div>
	);
}
