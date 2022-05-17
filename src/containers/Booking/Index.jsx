import React, { useState, useEffect } from "react";
import Header from "../../components/Layouts/HeaderBlack";
import Doctor from "../../images/doctor.png";
import Form from "../../components/Layouts/BookingForm";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../actions/movies.action";
import { Link, useParams } from "react-router-dom";
import { imgURL } from "../../urlConfig";
import { getAllTheaters } from "../../actions/theater.action";

function Booking() {
	const [page, setPage] = useState(0);
	// const [booking, setBooking] = useState({
	// 	Location: "",
	// 	Date: "",
	// 	Time: "",
	// 	NOS: "",
	// });

	const movie = useSelector(state => state.movie);
	const theaterStore = useSelector(state => state.theaters);

	//console.log("puk", movie);

	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getMovie("/admin/movies/" + id));
		dispatch(getAllTheaters());
	}, []);

	const [startDate, setStartDate] = useState(new Date());
	const [time, setTime] = useState("");
	const [theater, setTheater] = useState("");
	const [noOfSeats, setnoOfSeats] = useState("");

	const reserve = () => {
		const reservation = {
			Location: theater,
			Date: startDate,
			Time: time,
			NOS: noOfSeats,
		};

		setPage(page + 1);
		console.log("Meenan", reservation);
	};

	if (movie.movie.moviePictures) {
		return (
			<div className='bg-[#4A47A3]/5 h-screen w-screen'>
				<Header />
				<div className='grid grid-cols-2 mx-[10rem]'>
					<div className='text-black'>
						<h3 className='font-medium text-lg text-left mt-8 uppercase'>
							{movie.movie.movieName}
						</h3>
						<Form
							startDate={startDate}
							setStartDate={setStartDate}
							time={time}
							setTime={setTime}
							theater={theater}
							setTheater={setTheater}
							noOfSeats={noOfSeats}
							setnoOfSeats={setnoOfSeats}
						/>
						<button
							className='  font-normal text-lg mt-1 px-3 py-1 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md hover:bg-main-orangedrk-active'
							onClick={() => {
								reserve();
							}}>
							Next
						</button>
					</div>
					<div className=''>
						<img
							src={imgURL(movie.movie.moviePictures[0].img)}
							className='w-[19rem] mt-8 ml-[11rem] drop-shadow-2xl'
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Booking;
