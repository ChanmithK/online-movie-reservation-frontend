import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../actions/movies.action";
import { Link, useParams } from "react-router-dom";
import { imgURL } from "../../urlConfig";
import { getAllTheaters } from "../../actions/theater.action";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function BookingForm({
	startDate,
	setStartDate,
	time,
	setTime,
	theater,
	setTheater,
	noOfSeats,
	setnoOfSeats,
}) {
	const [price, setPrice] = useState(1);

	const movie = useSelector(state => state.movie);
	const theaterStore = useSelector(state => state.theaters);

	console.log("puk", movie);

	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getMovie("/admin/movies/" + id));
		dispatch(getAllTheaters());
	}, []);
	console.log("theater store", theaterStore);

	return (
		<div>
			<span className="text-left mt-12 text-base text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block">
				Location
			</span>

			<select
				className='font-medium text-md mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md focus:ring-1'
				onChange={e => setTheater(e.target.value)}>
				{Object.keys(theaterStore.theaters).map(element => (
					<option
						key={element}
						value={theaterStore.theaters[element].theaterName}>
						{theaterStore.theaters[element].theaterName}
					</option>
				))}
			</select>
			<span className="text-left mt-6 text-base text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block">
				Date
			</span>
			<DatePicker
				className='font-medium text-md mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md focus:ring-1'
				selected={startDate}
				onChange={date => setStartDate(date)}
				includeDates={[new Date("2022-05-25"), new Date("2022-08-30")]}
			/>

			<span className="text-left mt-6 text-base text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block">
				Time
			</span>
			<select
				name='Time'
				value={time}
				onChange={e => setTime(e.target.value)}
				className='font-medium text-md mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md focus:ring-1'>
				<option value='' disabled selected hidden>
					Select Time
				</option>
				<option value='11:30'>11:30</option>
				<option value='15:00'>15:00</option>
				<option value='18:00'>18:00</option>
				<option value='20:30'>20:30</option>
			</select>
			<span className="text-left mt-6 text-base text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block ">
				Number of Seats
			</span>
			<input
				type='number'
				name='number'
				min='0'
				max='10'
				value={noOfSeats}
				onChange={e => setnoOfSeats(e.target.value)}
				className='font-medium text-md mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md focus:ring-1'
			/>
			<h3 className='text-left mt-8 mb-[1rem]'>
				Price: Rs.{movie.movie.price * noOfSeats}.00/-
			</h3>
		</div>
	);
}

export default BookingForm;
