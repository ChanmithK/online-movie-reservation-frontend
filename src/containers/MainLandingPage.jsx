import React from "react";
import Header from "../components/Layouts/Header";
import StrangeCover from "../images/StrangeCover.png";

function MainLandingPage() {
	return (
		<div className=''>
			<Header className='absolute' />
			<div className='bg-cover'>
				<img className='' src={StrangeCover} />
			</div>
		</div>
	);
}

export default MainLandingPage;
