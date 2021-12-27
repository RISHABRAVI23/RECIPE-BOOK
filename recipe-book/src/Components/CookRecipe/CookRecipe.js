import React from "react";

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
					}}
					onMouseOver={() => {}}>
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
				<span className="input-group-text" id="basic-addon1">
					Title
				</span>
				<input
					type="text"
					className="form-control"
					placeholder="Title"
					aria-label="Username"
					aria-describedby="basic-addon1"
				/>
			</div>
			<div className="input-group mb-3">
				<span className="input-group-text">Description</span>
				<textarea
					className="form-control"
					aria-label="With textarea"></textarea>
			</div>
			<div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon1">
					Title
				</span>
				<input
					type="text"
					className="form-control"
					placeholder="Username"
					aria-label="Username"
					aria-describedby="basic-addon1"
				/>
			</div>
		</div>
	);
}
