import React from "react";
import "./App.css";
import Register from "./containers/Register/Register";
import Header from "./components/Layouts/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./containers/Login";
import MainLandingPage from "./containers/MainLandingPage";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<MainLandingPage />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/header' element={<Header />} />
			</Routes>
		</div>
	);
}

export default App;
