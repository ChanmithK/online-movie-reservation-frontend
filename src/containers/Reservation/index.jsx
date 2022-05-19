import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import {
	getAllBookings,
	RemoveBookingDetails,
} from "../../actions/booking.actions";
import Header from "../../components/Layouts/HeaderTwo";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function Cart() {
	const bookings = useSelector(state => state.bookings);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllBookings());
	}, []);

	console.log("BOOKINGS REDUCER:", bookings);

	const RemoveBooking = id => {
		// e.preventDefault();
		// console.log(id);
		dispatch(RemoveBookingDetails(id));
		window.location.reload(false);
	};

	return (
		<div className='bg-scope-blue w-screen h-screen'>
			<Header />
			<h3 className='text-white font-medium text-4xl text-left mx-[10rem] mt-[5rem] capitalize'>
				Reservations
			</h3>

			<table className='ml-[10rem] mt-8'>
				<div className='w-[70rem]'>
					<thead>
						<tr className='text-lg font-medium bg-white'>
							<th className='w-[40rem] text-left pt-1 pl-2 pb-2'>Movie Name</th>
							<th className='w-[20rem] text-center'>Actions</th>
						</tr>
					</thead>
				</div>

				<div className='example h-64 overflow-y-scroll w-[66rem]'>
					<tbody className=' bg-white'>
						{bookings.bookings.length > 0
							? bookings.bookings.map(booking => (
									<tr className='text-lg '>
										<td className='w-[40rem] text-left pl-2'>
											{booking.movieId}
										</td>
										<td className='w-[20rem] text-center flex gap-2 justify-center pb-2'>
											<button
												className='hover:bg-main-purpledrk bg-main-purple  px-3 rounded-xl text-white font-medium text-left'
												onClick={() => {
													confirmAlert({
														title: "Yes to Cancel",
														message:
															"Are you sure to cancel this reservaton ?.",
														buttons: [
															{
																label: "Yes",
																onClick: () => {
																	RemoveBooking(booking._id);
																},
															},
															{
																label: "No",
															},
														],
													});
												}}>
												Cancel
											</button>
											<button className='hover:bg-main-orangedrk bg-main-orange  px-3 rounded-xl text-white font-medium text-left'>
												<Link to={"/user/booking/pdf/" + booking._id}>
													Ticket
												</Link>
											</button>
										</td>
									</tr>
							  ))
							: null}
					</tbody>
				</div>
			</table>
		</div>
	);
}

export default Cart;
