import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";

function App() {
	return (
		<div className='App'>
			<Navbar />
			{/* <Routes><Route path='/signin' element={<Signin />} /></Routes> */}
		</div>
	);
}

export default App;
