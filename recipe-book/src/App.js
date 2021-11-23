import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home/Home";
// import { useState } from "react";

function App() {
	// const [loggedIn, setLoggedIn] = useState(false);
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/sign-up" element={<SignUp />} />
					<Route exact path="/sign-in" element={<SignIn />} />
					<Route exact path="/" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
