/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CookRecipe(props) {
	const navigate = useNavigate();
	const [inputEmpty, setInputEmpty] = useState(false);
	const [image, setImage] = useState(false);
	const [error, setError] = useState(false);
	function displayImage(e) {
		let label = document.querySelector("label.image-n-label");
		let heading = document.querySelector("h6.text-center.image-caption");
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = () => {
			setImage(true);
			let img = document.querySelector("#recipe-image");
			img.setAttribute("src", reader.result);

			img.style.width = label.style.width;
			img.style.height = label.style.height;

			label.setAttribute(
				"style",
				`
				display: flex
				alignItems: center
				justifyContent: center
				background: #e9ecef
				width: 200px
				height: 200px
				cursor: pointer`
			);
			label.style.border = "2px solid grey";
			label.style.borderRadius = "10px";
			label.style.cursor = "pointer";
			heading.innerHTML =
				"Click on the image above to change the selected image.";
		};
	}
	function addIngredientsRequired() {
		let ing_list = document.querySelector(".ingredients_req");
		let id = ing_list.children.length + 1;

		let outerdiv = document.createElement("div");
		outerdiv.classList.add(
			"alert",
			"alert-dismissible",
			"fade",
			"show",
			"my-1",
			"py-1",
			"d-flex",
			"align-items-center",
			"justify-content-between"
		);
		outerdiv.setAttribute("role", "alert");

		let button = document.createElement("button");
		button.type = "button";
		button.className = "btn-close";
		button.setAttribute("data-bs-dismiss", "alert");
		button.ariaLabel = "Close";

		let li = document.createElement("li");
		li.classList.add("mx-2");

		let div = document.createElement("div");
		div.classList.add("input-group", "mb-3");

		let label = document.createElement("label");
		label.classList.add("input-group-text");
		label.innerHTML = "Ingredient";
		label.id = "basic-addon1";
		label.htmlFor = `ing-${id}`;

		let input = document.createElement("input");
		input.classList.add("form-control", "ingredient");
		input.type = "text";
		input.placeholder = "Ingredient";
		input.ariaLabel = "Ingredient";
		input.ariaDescribedBy = "basic-addon1";
		input.id = `ing-${id}`;

		div.appendChild(label);
		div.appendChild(input);
		li.appendChild(div);
		outerdiv.appendChild(li);
		outerdiv.appendChild(button);
		ing_list.appendChild(outerdiv);
	}
	function addStepInProcedure() {
		let pro_list = document.querySelector(".procedures");
		let id = pro_list.children.length + 1;

		let outerdiv = document.createElement("div");
		outerdiv.classList.add(
			"alert",
			"alert-dismissible",
			"fade",
			"show",
			"my-1"
		);
		outerdiv.setAttribute("role", "alert");

		let button = document.createElement("button");
		button.type = "button";
		button.className = "btn-close my-1";
		button.setAttribute("data-bs-dismiss", "alert");
		button.ariaLabel = "Close";

		let li = document.createElement("li");
		li.classList.add("mx-2");

		let div = document.createElement("div");
		div.classList.add("input-group", "mb-3");

		let label = document.createElement("label");
		label.classList.add("input-group-text");
		label.innerHTML = "Step";
		label.id = "basic-addon1";
		label.htmlFor = `pro-${id}`;

		let input = document.createElement("input");
		input.classList.add("form-control", "procedure");
		input.type = "text";
		input.placeholder = "Step";
		input.ariaLabel = "Step";
		input.ariaDescribedBy = "basic-addon1";
		input.id = `pro-${id}`;

		div.appendChild(label);
		div.appendChild(input);
		li.appendChild(div);
		outerdiv.appendChild(li);
		outerdiv.appendChild(button);
		pro_list.appendChild(outerdiv);
	}
	function checkInputs() {
		let inputs = document.querySelectorAll("input");
		inputs = Array.from(inputs);
		inputs.push(Array.from(document.querySelectorAll("textarea")));

		for (let i = 1; i < inputs.length; i++) {
			const element = inputs[i];
			if (element.value !== "" || element.id === "precautions") {
				setInputEmpty(false);
				continue;
			} else {
				window.scrollTo({
					top: document.querySelector(".alert").style.top - 150,
					left: 0,
					behavior: "smooth",
				});
				setInputEmpty(true);
				return false;
			}
		}
		return true;
	}
	function submitForm(commence) {
		if (commence) {
			let data = new FormData();
			let created_by = JSON.parse(Cookies.get("info")).loggedUsername;
			let title = document.querySelector("#title").value;
			let desc = document.querySelector("#desc").value;
			let recipe_image =
				document.querySelector("#recipe-image-inp").files[0];
			let ingredients_req_inp = Array.from(
				document.querySelectorAll(".ingredient")
			);
			let procedure_inp = Array.from(
				document.querySelectorAll(".procedure")
			);
			let precautions = document.querySelector("#precautions").value;

			let ingredients_req = [];
			let procedure = [];

			ingredients_req_inp.forEach((inp) => {
				ingredients_req.push(inp.value);
			});
			procedure_inp.forEach((inp) => {
				procedure.push(inp.value);
			});
			// console.log(procedure, ingredients_req);
			data.append("created_by", created_by);
			data.append("title", title);
			data.append("desc", desc);
			recipe_image && data.append("recipe_image", recipe_image);
			// data.append("ingredients_req", ingredients_req); //This is wrong
			// data.append("procedure", procedure);
			ingredients_req.forEach((ing) => {
				data.append("ingredients_req", ing);
			}); //This is correct.
			procedure.forEach((step) => {
				data.append("procedure", step);
			});
			data.append("precautions", precautions);
			axios
				.post("http://localhost:8000/recipes/get-all-post/", data, {
					headers: { "content-type": "multipart/form-data" },
				})
				.then((res) => {
					console.log(res);
					navigate("/");
				})
				.catch((err) => {
					setError(true);
				});
		}
	}
	return (
		<form
			className="container my-5"
			onSubmit={(e) => {
				e.preventDefault();
				submitForm(checkInputs());
			}}>
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
			{inputEmpty && (
				<div
					className="alert alert-danger alert-dismissible fade show"
					role="alert">
					<strong>Inputs are Empty</strong> You should check some of
					those fields below as it looks like they are empty or a file
					which is not image is uploaded.
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="alert"
						aria-label="Close"></button>
				</div>
			)}
			<div className="mb-3 d-flex justify-content-center">
				<label
					htmlFor="recipe-image-inp"
					className="form-label image-n-label"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						background: "#e9ecef",
						width: "200px",
						height: "200px",
						cursor: "pointer",
						borderStyle: "double",
						borderColor: "grey",
						borderWidth: "5px",
					}}>
					{image ? (
						<img
							alt="Selected File is not Image"
							id="recipe-image"
							style={{ borderRadius: "inherit" }}
						/>
					) : (
						<p className="my-auto">Select Image (Optional)</p>
					)}
				</label>
				<input
					className="form-control"
					type="file"
					id="recipe-image-inp"
					style={{ display: "none" }}
					onChange={displayImage}
				/>
			</div>
			<h6 className="text-center image-caption">
				Click in the box above to select the image.
			</h6>
			<div className="input-group mb-3">
				<label
					className="input-group-text"
					id="basic-addon1"
					htmlFor="title">
					Title
				</label>
				<input
					type="text"
					id="title"
					className="form-control"
					placeholder="Title"
					aria-label="Title"
					aria-describedby="basic-addon1"
				/>
			</div>
			<div className="input-group mb-3">
				<label className="input-group-text" htmlFor="desc">
					Description
				</label>
				<textarea
					className="form-control"
					aria-label="desc"
					id="desc"></textarea>
			</div>
			<div className="container border border-2 rounded text-center mb-3">
				<div className="container">
					<h4 className="my-4">Ingredients</h4>
					<ol className="ingredients_req">
						<div
							className="alert alert-dismissible fade show my-1 py-1 d-flex align-items-center justify-content-between"
							role="alert">
							<li className="mx-2">
								<div className="input-group mb-3">
									<label
										className="input-group-text"
										htmlFor="ing-1">
										Ingredient
									</label>
									<input
										type="text"
										className="form-control ingredient"
										placeholder="Ingredient"
										aria-label="Ingredient"
										aria-describedby="basic-addon1"
										id="ing-1"
									/>
								</div>
							</li>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="alert"
								aria-label="Close"></button>
						</div>
					</ol>
				</div>
				<button
					type="button"
					className="btn btn-primary my-2"
					onClick={addIngredientsRequired}>
					Add Another Ingredient
				</button>
			</div>
			<div className="container border border-2 rounded text-center mb-3">
				<div className="container">
					<h4 className="my-4">Procedure</h4>
					<ol className="procedures">
						<div
							className="alert alert-dismissible fade show my-1"
							role="alert">
							<li className="mx-2">
								<div className="input-group mb-3">
									<label
										className="input-group-text"
										htmlFor="pro-1">
										Step
									</label>
									<input
										type="text"
										className="form-control procedure"
										placeholder="Step"
										aria-label="Step"
										aria-describedby="basic-addon1"
										id="pro-1"
									/>
								</div>
							</li>
							<button
								type="button"
								className="btn-close my-1"
								data-bs-dismiss="alert"
								aria-label="Close"
								width="100%"></button>
						</div>
					</ol>
				</div>
				<button
					type="button"
					className="btn btn-primary my-2"
					onClick={addStepInProcedure}>
					Add Another Step
				</button>
			</div>
			<div className="input-group mb-3">
				<label
					className="input-group-text"
					id="basic-addon1"
					htmlFor="precaution">
					Precautions
				</label>
				<input
					type="text"
					id="precautions"
					className="form-control"
					placeholder="Precautions"
					aria-label="Precautions"
					aria-describedby="basic-addon1"
				/>
			</div>
			<div className="container text-center">
				<button
					className="btn btn-success mx-auto"
					id="submit"
					type="submit">
					Submit
				</button>
			</div>
		</form>
	);
}
