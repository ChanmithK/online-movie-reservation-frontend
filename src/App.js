import React from "react";
import "./App.css";
import Register from "./containers/Register";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./containers/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
