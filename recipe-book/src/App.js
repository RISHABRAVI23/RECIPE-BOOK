import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import Home from "./Components/Home/Home";
import Users from "./Components/Users/Users";
import { useState } from "react";

function App() {
	const [loggedIn, setLoggedIn] = useState(true);
	const [loggedUser, setLoggedUser] = useState();
	return (
		<div className="App">
			<Router>
				<Navbar loggedIn={loggedIn} />
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
				</Routes>
			</Router>
		</div>
	);
}

export default App;
