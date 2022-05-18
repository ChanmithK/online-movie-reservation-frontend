import React from "react";

function PhoneFormTwo() {
	return (
		<div>
			<span className="text-left  mt-16 text-base text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block ">
				Name
			</span>
			<input
				required
				type='text'
				name='number'
				min='0'
				max='10'
				className='font-medium text-md mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md focus:ring-1'
			/>
			<span className="text-left mt-6 text-base text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block ">
				Address
			</span>
			<input
				required
				type='text'
				name='number'
				min='0'
				max='10'
				className='font-medium text-md mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md focus:ring-1'
			/>
		</div>
	);
}

export default PhoneFormTwo;
