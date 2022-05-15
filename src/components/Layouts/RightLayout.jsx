import React from "react";
import LayoutCover from "../../images/LayoutCover.png";

function RightLayout() {
	return (
		<div className='bg-slate-300 h-full relative'>
			<h1 className='absolute w-full text-center bottom-48 font-bold text-xl py-10 text-white'>
				VOX CINEMAZ
			</h1>
			<p className='absolute w-full font-medium text-center text-white px-10 bottom-28 text-left'>
				Did you know that you can book out a cinema hall at VOX Cinemas?​
			</p>
			<img src={LayoutCover} className='bg-sky-500 h-full object-cover' />
		</div>
	);
}

export default RightLayout;
