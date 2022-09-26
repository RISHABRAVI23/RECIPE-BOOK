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
    console.log(recipe);
    return (
        <div className="container my-3">
            {error ? (
                <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                >
                    It seems that this recipe <strong>DOES NOT EXIST</strong>{" "}
                    Please check if the url is correct. :( &nbsp;
                    <Link to={"/"}>Go to Home Page</Link>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    ></button>
                </div>
            ) : (
                ""
            )}
            {recipe !== undefined && (
                <>
                    <div className="container overlay-popup-menu"></div>
                    <div className="container d-flex flex-column align-items-center">
                        <img
                            alt="recipe image"
                            id="recipe-image"
                            style={{
                                border: "1px solid grey",
                                borderRadius: "10px",
                                marginBottom: "30px",
                            }}
                            src={`http://localhost:8000${recipe.recipe_image}`}
                        />
                        <u>
                            <h1
                                className="text-center"
                                style={{ marginBottom: "30px" }}
                            >
                                <strong>{recipe.title.toUpperCase()}</strong>
                            </h1>
                            <h5 className="text-center">
                                {" "}
                                <strong>
                                    {" "}
                                    BY - {recipe.created_by.toUpperCase()}
                                </strong>
                            </h5>
                            <h5>
                                <strong>
                                    {" "}
                                    ON - {Date(Array.from(recipe.date_created))}
                                </strong>
                            </h5>
                        </u>

                        <div className="container d-flex flex-column my-2">
                            <u>
                                <h2>Description</h2>
                            </u>
                            <p>
                                {recipe.desc !== "" || undefined
                                    ? recipe.desc
                                    : "[DESCRIPTION NOT GIVEN]"}
                            </p>
                        </div>
                        <div className="container d-flex flex-column my-2">
                            <u>
                                <h2>Ingredients Required</h2>
                            </u>

                            <ol className="list-group list-group-numbered">
                                {recipe.ingredients_req.map((ing, i) => {
                                    return (
                                        <li className="list-group-item" key={i}>
                                            {ing.toUpperCase()}
                                        </li>
                                    );
                                })}
                            </ol>
                        </div>
                        <div className="container d-flex flex-column my-2">
                            <u>
                                <h2>Procedure</h2>
                            </u>

                            <div className="accordion" id="procedure">
                                {recipe.procedure.map((step, i) => {
                                    return (
                                        <div className="accordion-item" key={i}>
                                            <h2
                                                className="accordion-header"
                                                id={`heading${i}`}
                                            >
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${i}`}
                                                    aria-expanded="true"
                                                    aria-controls={`collapse${i}`}
                                                >
                                                    Step #{i + 1}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${i}`}
                                                className={`accordion-collapse collapse ${
                                                    i === 0 ? "show" : ""
                                                }`}
                                                aria-labelledby={`heading${i}`}
                                                data-bs-parent="#procedure"
                                            >
                                                <div className="accordion-body">
                                                    {step}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="container d-flex flex-column my-2">
                            <u>
                                <h2>Precautions</h2>
                            </u>
                            {console.log(recipe.precautions)}
                            <p>{recipe.precautions}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
