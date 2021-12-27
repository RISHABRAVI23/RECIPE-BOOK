import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import Home from "./Components/Home/Home";
import Users from "./Components/Users/Users";
import UserProfile from "./Components/UserProfile/UserProfile";
import { useState } from "react";
import Cookies from "js-cookie";
import CookRecipe from "./Components/CookRecipe/CookRecipe";

function App() {
	function initializeLoggedIn() {
		if (Cookies.get("info")) {
			return JSON.parse(Cookies.get("info")).loggedIn;
		}
	}
	function initializeLoggedUser() {
		if (Cookies.get("info")) {
			return JSON.parse(Cookies.get("info")).loggedUsername;
		}
	}
	const [loggedIn, setLoggedIn] = useState(initializeLoggedIn());
	const [loggedUser, setLoggedUser] = useState(initializeLoggedUser());
	return (
		<div className="App">
			<Router>
				<Navbar
					loggedIn={loggedIn}
					loggedUser={loggedUser}
					setLoggedIn={setLoggedIn}
					setLoggedUser={setLoggedUser}
				/>
				<Routes>
					<Route
						exact
						path="/"
						element={<Home loggedIn={loggedIn} />}
					/>
					{loggedIn ? (
						<>
							<Route
								exact
								path="/cook-recipe"
								element={<CookRecipe />}
							/>
						</>
					) : (
						<>
							<Route
								exact
								path="/sign-up"
								element={<SignUp setLoggedIn={setLoggedIn} />}
							/>
							<Route
								exact
								path="/sign-in"
								element={<SignIn setLoggedIn={setLoggedIn} />}
							/>
						</>
					)}
					<Route exact path="/users" element={<Users />} />
					<Route
						exact
						path="/profile/:username"
						element={<UserProfile />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
