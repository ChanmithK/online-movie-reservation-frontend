import React from "react";

function CreditCardForm() {
	return (
		<div>
			<span className="text-left  mt-8 text-base text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block ">
				Name on Card
			</span>
			<input
				required
				type='text'
				name='number'
				min='0'
				max='10'
				className='font-medium text-md mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md focus:ring-1'
			/>
			<span className="text-left mt-4 text-base text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block ">
				Account Number
			</span>
			<input
				required
				type='number'
				name='number'
				min='0'
				max='10'
				className='font-medium text-md mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md focus:ring-1'
			/>
			<span className="text-left mt-4 text-base text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block ">
				MM/ YY
			</span>
			<input
				required
				type='text'
				name='number'
				min='0'
				max='10'
				className='font-medium text-md mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md focus:ring-1'
			/>
			<span className="text-left mt-4 text-base text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block ">
				CVC
			</span>
			<input
				required
				type='text'
				name='number'
				min='0'
				max='10'
				className='font-medium mb-14 text-md mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md focus:ring-1'
			/>
		</div>
	);
}

export default CreditCardForm;
