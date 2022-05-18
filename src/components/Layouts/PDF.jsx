import React, { useState, useEffect } from "react";
import Header from "../../components/Layouts/HeaderBlack";
import QRCode from "react-qr-code";
import ReactDOM from "react-dom";

function PDF() {
	const [movie, setMovie] = useState("The Batman");
	const [date, setdate] = useState("2022.07.08");
	const [time, setTime] = useState("11:30");
	const [seats, setSeats] = useState(2);

	return (
		<div>
			<Header />
			<h3 className='text-black font-bold text-4xl text-left mx-[10rem] mt-[2rem]'>
				Ticket
			</h3>
			<div className='grid grid-cols-3 mx-[10rem] justify-items-start mt-24'>
				<div className=''>
					<div className='text-left'>
						<h2 className='font-regular text-lg'>Movie Name</h2>
						<p className='font-bold text-3xl'>The Batman</p>
					</div>
					<div className='text-left mt-12'>
						<h2 className='font-regular text-lg'>Time</h2>
						<p className='font-bold text-3xl'>11:30</p>
					</div>
				</div>
				<div className=''>
					<div className='text-left'>
						<h2 className='font-regular text-lg'>Date</h2>
						<p className='font-bold text-3xl'>01/05/2022</p>
					</div>
					<div className='text-left'>
						<h2 className='font-regular text-lg mt-12'>Seat Count</h2>
						<p className='font-bold text-3xl'>02</p>
					</div>
				</div>
				<div className='ml-[3rem]'>
					<QRCode value='6281026b3f17d985c159835a' />,
				</div>
			</div>
		</div>
	);
}

export default PDF;
