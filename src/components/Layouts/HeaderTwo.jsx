import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import menu from "../../images/menu.png";

function HeaderTwo() {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-[48rem] mx-40 py-4">
        <div className="">
          <p className="font-regular text-xl text-white py-1">VOX CINEMAZ</p>
        </div>
        <div className="grid grid-cols-1">
          <Link to="#">
            {/* <img src={menu} className="w-6 ml-16 py-2" /> */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderTwo;
