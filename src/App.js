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

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/header" element={<Header />} />
        <Route path="/home-page" exact element={<PrivateWrapper />}>
          <Route path="/home-page" element={<HomePage />} />
        </Route>
        <Route path="/admin/movies/:id" exact element={<PrivateWrapper />}>
          <Route path="/admin/movies/:id" element={<Movie />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
