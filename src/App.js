import React from "react";
import "./App.css";
import Register from "./containers/Register";
import Header from "./components/Header";
// import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className='App'>
			<Header />
			<Register />
		</div>
	);
}

export default App;
