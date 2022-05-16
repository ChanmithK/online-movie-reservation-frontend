import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-[48rem] mx-40 py-4">
        <div className="">
          <p className="font-regular text-xl text-white py-1">VOX CINEMAZ</p>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <Link to="/login">
            <button className="text-white text-lg hover:underline font-medium py-1 w-24">
              Sign in
            </button>
          </Link>

          <Link to="/register">
            <button className="hover:bg-main-orangedrk text-lg bg-main-orange py-1 px-4 rounded-lg text-white font-medium">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
