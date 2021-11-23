import axios from "axios";
import React, { useEffect } from "react";

export default function Users() {
	useEffect(() => {
		axios
			.get("http://localhost:8000/users/")
			.then((response) => console.log(response));
	}, []);
	return <div></div>;
}
