import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../actions/movies.action";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Layouts/Header";
import { imgURL } from "../../urlConfig";
import { getAllTheaters } from "../../actions/theater.action";

function Booking() {
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

	const [noOfSeats, setnoOfSeats] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [theater, setTheater] = useState("");

	if (movie.movie.moviePictures) {
		return (
			<div>
				<div>{movie.movie.movieName}</div>
				<img src={imgURL(movie.movie.moviePictures[0].img)} alt='' />

				<div>
					<div className='w-96 text-left'>
						<label
							for='noOfSeats'
							className="text-base text-slate-700 font-normal after:content-['*'] after:ml-0.5 after:text-red-500 w-96">
							Theater:
						</label>
					</div>
					<select onChange={e => setTheater(e.target.value)}>
						{Object.keys(theaterStore.theaters).map(element => (
							<option
								key={element}
								value={theaterStore.theaters[element].theaterName}>
								{theaterStore.theaters[element].theaterName}
							</option>
						))}
					</select>

					<div className='w-96 text-left'>
						<label
							for='time'
							className="text-base text-slate-700 font-normal after:content-['*'] after:ml-0.5 after:text-red-500 ">
							Time:
						</label>
					</div>

					<select>
						<option key='USDAED' value='3.6732'>
							USDAED
						</option>
					</select>

					<div className='w-96 text-left'>
						<label
							for='date'
							className="text-base text-slate-700 font-normal after:content-['*'] after:ml-0.5 after:text-red-500 ">
							Date:
						</label>
					</div>

					<select>
						<option key='USDAED' value='3.6732'>
							USDAED
						</option>
					</select>

					<div className='w-96 text-left'>
						<label
							for='noOfSeats'
							className="text-base text-slate-700 font-normal after:content-['*'] after:ml-0.5 after:text-red-500 w-96">
							No of Seats:
						</label>
					</div>
					<input
						type='number'
						value={noOfSeats}
						className='font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
					/>

					<button className='mt-5 font-normal text-lg mt-1 px-3 py-1 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md hover:bg-main-orangedrk-active'>
						Next
					</button>
				</div>
			</div>
		);
	}
}

export default Booking;
