import React from "react";
import LayoutCover from "../../images/LayoutCover.png";

function RightLayout() {
	return (
		<div className='bg-slate-300 h-screen relative'>
			<h1 className='absolute w-full text-center top-[2rem] font-bold text-5xl py-10 text-white mx-auto'>
				VOX CINEMAZ
			</h1>
			{/* <p className='absolute w-full font-medium text-center text-white px-10 top-[10rem] text-left text-lg mx-auto'>
				Did you know that you can book out a cinema hall at VOX Cinemas?​
			</p> */}
			<img
				src={LayoutCover}
				className='bg-sky-500 h-full w-full object-cover'
			/>
		</div>
	);
}

export default RightLayout;
