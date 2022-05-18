import React from "react";
import { Link, useParams } from "react-router-dom";

function PaymentOption({ page, setPage }) {
	return (
		<div>
			<div className='flex flex-col'>
				<button
					className='font-normal text-lg mt-24 px-3 py-2 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md hover:bg-main-orangedrk-active'
					onClick={() => {
						setPage(4);
					}}>
					Pay Using Credi Card/ Debit Card
				</button>
				<button
					className=' font-normal text-lg mt-8 px-3 py-2 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md hover:bg-main-orangedrk-active'
					onClick={() => {
						setPage(page + 1);
					}}>
					Add to Phone Bill
				</button>
			</div>
		</div>
	);
}

export default PaymentOption;
