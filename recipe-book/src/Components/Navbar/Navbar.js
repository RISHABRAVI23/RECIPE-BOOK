import React from "react";
import { Link } from "react-router-dom";
import ShowNavUser from "./ShowNavUser/ShowNavUser";

export default function Navbar(props) {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<svg
							width="56"
							height="56"
							viewBox="0 0 56 56"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<rect width="56" height="56" fill="#E5E5E5" />
							<rect
								x="1"
								y="1"
								width="54"
								height="54"
								rx="13"
								fill="#F8F9FA"
								stroke="black"
								strokeWidth="2"
							/>
							<path
								d="M25.8125 22.6575C25.8125 24.4658 25.2467 25.93 24.115 27.05C22.9833 28.1583 21.5892 28.9108 19.9325 29.3075L27.0725 40H23.4325L16.8525 29.6575H13.5975V40H10.5525V15.9025H16.7475C19.7225 15.9025 21.9742 16.4742 23.5025 17.6175C25.0425 18.7492 25.8125 20.4292 25.8125 22.6575ZM22.5575 22.6575C22.5575 21.1175 22.1083 20.0092 21.21 19.3325C20.3233 18.6558 18.9525 18.3175 17.0975 18.3175H13.5975V27.2775H17.0975C18.8242 27.2775 20.1658 26.9275 21.1225 26.2275C22.0792 25.5158 22.5575 24.3258 22.5575 22.6575ZM46.8688 33.1225C46.8688 34.4408 46.6063 35.5433 46.0813 36.43C45.568 37.305 44.8738 38.005 43.9988 38.53C43.1355 39.055 42.1672 39.4342 41.0938 39.6675C40.0322 39.8892 38.9472 40 37.8388 40H31.3638V15.9025H37.2963C38.3463 15.9025 39.3788 16.0017 40.3938 16.2C41.4088 16.3867 42.3247 16.7133 43.1413 17.18C43.958 17.635 44.6055 18.2533 45.0838 19.035C45.5738 19.8167 45.8188 20.7967 45.8188 21.975C45.8188 23.0133 45.603 23.8942 45.1713 24.6175C44.7513 25.3292 44.1972 25.9008 43.5088 26.3325C42.8322 26.7642 42.1088 27.0675 41.3388 27.2425C42.2255 27.3942 43.0888 27.6742 43.9288 28.0825C44.7805 28.4792 45.4805 29.08 46.0288 29.885C46.5888 30.69 46.8688 31.7692 46.8688 33.1225ZM42.7038 22.1325C42.7038 20.7675 42.278 19.7992 41.4263 19.2275C40.5863 18.6442 39.4372 18.3525 37.9788 18.3525H34.3913V26.1575H38.2763C39.6997 26.1575 40.7905 25.8425 41.5488 25.2125C42.3188 24.5708 42.7038 23.5442 42.7038 22.1325ZM43.6663 33.2275C43.6663 32.0142 43.4272 31.0808 42.9488 30.4275C42.4822 29.7625 41.858 29.3017 41.0763 29.045C40.2947 28.7883 39.4372 28.66 38.5038 28.66H34.3913V37.4975H38.3638C39.1572 37.4975 39.9622 37.3925 40.7788 37.1825C41.5955 36.9608 42.278 36.5467 42.8263 35.94C43.3863 35.3217 43.6663 34.4175 43.6663 33.2275Z"
								fill="black"
							/>
						</svg>
					</Link>
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
								<Link className="nav-link" to="/users">
									Users
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
						{props.loggedIn ? (
							<ShowNavUser loggedUser={props.loggedUser} />
						) : (
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
						)}
					</div>
				</div>
			</nav>
		</div>
	);
}
