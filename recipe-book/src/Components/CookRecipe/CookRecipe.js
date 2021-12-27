import React, { useState } from "react";

export default function CookRecipe(props) {
	function displayImage(e) {
		let img = document.querySelector(".recipe-image");
		let label = document.querySelector("label.image-n-label");
		let heading = document.querySelector("h6.text-center.image-caption");
		let image = e.target.files[0];
		console.log(image);
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = () => {
			console.log(reader.result);
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
	function addIngredientsRequired(e) {
		let ing_list = document.querySelector(".ingredients_req");

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

		let input = document.createElement("input");
		input.classList.add("form-control");
		input.type = "text";
		input.placeholder = "Ingredient";
		input.ariaLabel = "Ingredient";
		input.ariaDescribedBy = "basic-addon1";

		div.appendChild(label);
		div.appendChild(input);
		li.appendChild(div);
		outerdiv.appendChild(li);
		outerdiv.appendChild(button);
		ing_list.appendChild(outerdiv);
	}
	function addStepInProcedure(e) {
		let pro_list = document.querySelector(".procedure");

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
		label.innerHTML = "Step";
		label.id = "basic-addon1";

		let input = document.createElement("input");
		input.classList.add("form-control");
		input.type = "text";
		input.placeholder = "Step";
		input.ariaLabel = "Step";
		input.ariaDescribedBy = "basic-addon1";

		div.appendChild(label);
		div.appendChild(input);
		li.appendChild(div);
		outerdiv.appendChild(li);
		outerdiv.appendChild(button);
		pro_list.appendChild(outerdiv);
	}

	return (
		<div className="container my-5">
			<div className="mb-3 d-flex justify-content-center">
				<label
					for="formFile"
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
					<img
						src="..."
						alt="No Image Selected"
						className="recipe-image"
					/>
				</label>
				<input
					className="form-control"
					type="file"
					id="formFile"
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
					for="title">
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
				<label className="input-group-text" for="desc">
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
									<label className="input-group-text">
										Ingredient
									</label>
									<input
										type="text"
										className="form-control"
										placeholder="Ingredient"
										aria-label="Ingredient"
										aria-describedby="basic-addon1"
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
					class="btn btn-primary my-2"
					onClick={addIngredientsRequired}>
					Add Another Ingredient
				</button>
			</div>
			<div className="container border border-2 rounded text-center mb-3">
				<div className="container">
					<h4 className="my-4">Procedure</h4>
					<ol className="procedure">
						<div
							className="alert alert-dismissible fade show my-1 py-1 d-flex align-items-center justify-content-between"
							role="alert">
							<li className="mx-2">
								<div className="input-group mb-3">
									<label className="input-group-text">
										Step
									</label>
									<input
										type="text"
										className="form-control"
										placeholder="Step"
										aria-label="Step"
										aria-describedby="basic-addon1"
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
					class="btn btn-primary my-2"
					onClick={addStepInProcedure}>
					Add Another Step
				</button>
			</div>
		</div>
	);
}
