import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Recipe from "./Recipe/Recipe";
import { LoadingContext } from "../../Contexts/LoadingContext";

export default function Home(props) {
	const params = window.location.search;
	document.querySelector("title").innerHTML = "Recipe Book | Recipes";
	const [allRecipes, setAllRecipes] = useState([]);
	const [searchResult, setSearchResult] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useContext(LoadingContext);

	function updateRecipes() {
		setLoading(true);
		axios
			.get(`http://localhost:8000/recipes/get/${props.loggedUser}`)
			.then((res) => {
				setAllRecipes(res.data.reverse());
			})
			.catch((err) => {
				setError(true);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	useEffect(() => {
		updateRecipes();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function handleDelete(id, title) {
		let confirmation = window.confirm(
			`Are you sure you want to delete recipe: ${title}`
		);
		if (confirmation) {
			axios
				.delete(`http://localhost:8000/recipes/${id}`)
				.then((res) => {
					updateRecipes();
				})
				.catch((err) => {
					setError(true);
				});
		}
	}

	function searchRecipes() {
		let result = [];
		let searchTerm = document.querySelector("input.search").value;
		allRecipes.forEach((recipe) => {
			if (recipe.title.includes(searchTerm) && !result.includes(recipe)) {
				result.push(recipe);
			} else if (
				recipe.desc.includes(searchTerm) &&
				!result.includes(recipe)
			) {
				result.push(recipe);
			} else if (
				recipe.created_by.includes(searchTerm) &&
				!result.includes(recipe)
			) {
				result.push(recipe);
			} else if (
				recipe.precautions.includes(searchTerm) &&
				!result.includes(recipe)
			) {
				result.push(recipe);
			}
			recipe.ingredients_req.forEach((ing) => {
				if (ing.includes(searchTerm) && !result.includes(recipe)) {
					result.push(recipe);
				}
			});
			recipe.procedure.forEach((step) => {
				if (step.includes(searchTerm) && !result.includes(recipe)) {
					result.push(recipe);
				}
			});
		});
		setSearchResult(result);
		if (searchTerm === "") {
			setSearchResult([]);
		}
	}

	function clearSearch(e) {
		document.querySelector("input.search").value = "";
		searchRecipes();
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
			<div className="d-flex align-items-center">
				<input
					className="form-control me-2 search"
					type="text"
					placeholder="Search"
					aria-label="Search"
					onChange={(e) => {
						searchRecipes();
					}}
				/>
				<button className="btn-close" onClick={clearSearch}></button>
			</div>
			<div
				className="container d-flex justify-content-around"
				style={{ flexWrap: "wrap" }}>
				{searchResult.length <= 0 ? (
					allRecipes.length > 0 && !loading ? (
						document.querySelector("input.search").value === "" ? (
							allRecipes.map((recipe, i) => {
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
							<h4 className="my-5">
								There are no Recipes made by you that match this
								search criteria. Check out{" "}
								<Link
									to="/others-recipes"
									className="link-primary">
									Other's recipes
								</Link>{" "}
								or{" "}
								<Link to="cook-recipe" className="link-primary">
									Add your own Recipe
								</Link>
							</h4>
						)
					) : (
						<h4 className="my-5">
							There are no Recipes made by you. Check out{" "}
							<Link to="/others-recipes" className="link-primary">
								Other's recipes
							</Link>{" "}
							or{" "}
							<Link to="cook-recipe" className="link-primary">
								Add your own Recipe
							</Link>
						</h4>
					)
				) : (
					searchResult.map((recipe, i) => {
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
				)}
			</div>
		</div>
	);
}
