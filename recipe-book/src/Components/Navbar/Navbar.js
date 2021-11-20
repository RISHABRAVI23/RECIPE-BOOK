import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Profile
								</Link>
							</li>
							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									to="/"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									Other Websites by Me
								</Link>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarDropdown">
									<li>
										<a
											className="dropdown-item"
											href="http://lib-sys.rishabravi.com">
											Lib-Sys
										</a>
									</li>
								</ul>
							</li>
						</ul>
						<form className="container-fluid d-flex justify-content-end">
							<Link
								className="btn btn-outline-success me-2"
								to="/sign-up">
								Sign Up
							</Link>
							<Link
								className="btn btn-sm btn-outline-secondary"
								type="button"
								to="/sign-in">
								Sign In
							</Link>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
}
