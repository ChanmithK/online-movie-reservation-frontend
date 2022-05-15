import React from "react";
import "./App.css";
import Signin from "./containers/Signin";
import { Routes, Route } from "react-router-dom";
import Signup from "./containers/Register";
import LandingPage from "./containers/LandingPage";
import StudentRegister from "./containers/StudentRegister";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/student/signup" element={<StudentRegister />} />
      </Routes>
    </div>
  );
}

export default App;
