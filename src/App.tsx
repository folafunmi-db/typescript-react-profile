import React from "react";
import { Button } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header/header.component";
import {Movies} from "./components/Movies/movies.component";

function App() {
	return (
		<div className="App">
			<Header />
			<Movies />
		</div>
	);
}

export default App;
