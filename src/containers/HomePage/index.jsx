import React from "react";
import DoctorStrange from "../../images/StrangeCover.png";
import Header from "../../components/Layouts/HeaderTwo";
import About from "../../components/Layouts/MovieAbout";
import Now from "../../components/Layouts/NowShowing";
import Comming from "../../components/Layouts/UpComing";

function HomePage(props) {
	return (
		<div className='relative'>
			<div className='absolute'>
				<Header />
				<About />
			</div>

			<img className='w-screen h-screen' src={DoctorStrange} />
			<Now />
			<Comming />
		</div>
	);
}

export default HomePage;
