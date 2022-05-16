import React from "react";
import Header from "../components/Layouts/Header";
//import Header from "../components/Layouts/HeaderTwo";
import StrangeCover from "../images/StrangeCover.png";

function MainLandingPage() {
  return (
    <div className="relative">
      <div className="absolute">
        <Header />
      </div>

      <img className="w-screen h-screen" src={StrangeCover} />
    </div>
  );
}

export default MainLandingPage;
