import React from "react";
import Header from "../components/Layouts/Header";
//import Header from "../components/Layouts/HeaderTwo";
import StrangeCover from "../images/StrangeCover.png";
import About from "../components/Layouts/MovieAbout";
function MainLandingPage() {
	return (
		<div className='relative'>
			<div className='absolute'>
				<Header />
				<About />
			</div>

			<img className='w-screen h-screen' src={StrangeCover} />
		</div>
	);
}

export default MainLandingPage;
