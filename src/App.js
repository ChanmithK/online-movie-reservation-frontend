import React, { useEffect } from "react";
import "./App.css";
import Register from "./containers/Register/Register";
import Header from "./components/Layouts/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./containers/Login";
import MainLandingPage from "./containers/MainLandingPage";
import HomePage from "./containers/HomePage";
import Movie from "./containers/Movie/Index";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions/auth.actions";
import PrivateWrapper from "./components/HOC/PrivateRoute";
import Cart from "./containers/Cart/Index";
import Booking from "./containers/Booking/Index";
import PDF from "./components/Layouts/PDF";
import Reservations from "./containers/Reservation/index";

function App() {
	const dispatch = useDispatch();

	// retriving authentication details from the store
	const auth = useSelector(state => state.auth);

	// user must be logged-in to get the priviledges to access the paths
	useEffect(() => {
		if (!auth.authenticate) {
			dispatch(isUserLoggedIn());
		}
	}, [auth.authenticate]);

	return (
		// Defining paths using routes where user can access
		<div className='App'>
			<Routes>
				<Route path='/' element={<MainLandingPage />} />
				<Route path='/register' element={<Register />} />
				<Route path='/res' element={<Reservations />} />
				<Route path='/login' element={<Login />} />
				<Route path='/user/booking/pdf/:id' element={<PDF />} />
				<Route path='/header' element={<Header />} />
				<Route path='/home-page' exact element={<PrivateWrapper />}>
					<Route path='/home-page' element={<HomePage />} />
				</Route>
				<Route path='/admin/movies/:id' exact element={<PrivateWrapper />}>
					<Route path='/admin/movies/:id' element={<Movie />} />
				</Route>
				<Route path='/user/booking/:id' exact element={<PrivateWrapper />}>
					<Route path='/user/booking/:id' element={<Booking />} />
				</Route>
				<Route
					path='/user/cart/getCartItems'
					exact
					element={<PrivateWrapper />}>
					<Route path='/user/cart/getCartItems' element={<Cart />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
