import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import Home from "./Components/Home/Home";
import Users from "./Components/Users/Users";
import UserProfile from "./Components/UserProfile/UserProfile";
import { useState } from "react";
import Cookies from "js-cookie";

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
	const [loggedUser] = useState(initializeLoggedUser());
	return (
		<div className="App">
			<Router>
				<Navbar loggedIn={loggedIn} loggedUser={loggedUser} />
				<Routes>
					<Route exact path="/" element={<Home />} />
					{loggedIn ? (
						""
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
