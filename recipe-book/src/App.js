import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/sign-up" element={<SignUp />} />
					<Route exact path="/sign-in" element={<SignIn />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
