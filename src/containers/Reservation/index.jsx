import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Header from "../../components/Layouts/HeaderBlack";

function index() {
	return (
		<div className='bg-scope-blue w-screen h-screen'>
			<Header />
			<h3 className='text-white font-medium text-4xl text-left mx-[10rem] mt-[5rem]'>
				Reservations
			</h3>
			<table className='ml-[10rem] mt-8'>
				<div className='w-[70rem]'>
					<thead>
						<tr className='text-lg font-medium bg-white '>
							<th className='w-[30rem] text-left'>Movie Name</th>
							<th className='w-[20rem] text-center'>Action</th>
						</tr>
					</thead>
				</div>

				<div className='example h-64 overflow-y-scroll w-[66rem]'>
					<tbody className=' bg-white'>
						<tr className='text-lg  '>
							<td className='w-[30rem] text-left'>fghfgfhfghfghfghfghf</td>
							<td className='w-[20rem] text-center flex gap-2 justify-center'>
								<button
									className='hover:bg-main-purpledrk bg-main-purple  px-3 rounded-xl text-white font-medium text-left'
									onClick={() => {}}>
									Cancel
								</button>
								<button className='hover:bg-main-orangedrk bg-main-orange  px-3 rounded-xl text-white font-medium text-left'>
									View
								</button>
							</td>
						</tr>
					</tbody>
				</div>
			</table>
		</div>
	);
}

export default index;
