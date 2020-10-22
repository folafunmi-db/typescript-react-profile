import React from "react";
import { Button } from "@material-ui/core";
import "./App.css";
import {Header} from "./"

function App() {
	return (
		<div className="App">
      <Header />
			<Button variant="contained" color="primary">
				Hello World
			</Button>
		</div>
	);
}

export default App;
