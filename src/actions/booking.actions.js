import axios from "../helpers/axios";
import { bookingConstants } from "./constants";

export const AddBooking = booking => {
	return async dispatch => {
		dispatch({ type: bookingConstants.ADD_BOOKING_REQUEST });
		const res = await axios.post("/user/booking", {
			...booking,
		});

		if (res.status === 201) {
			const { message } = res.data;
			dispatch({
				type: bookingConstants.ADD_BOOKING_SUCCESS,
				payload: {
					message,
				},
			});
		} else {
			if (res.status === 400) {
				dispatch({
					type: bookingConstants.ADD_BOOKING_FAILURE,
					payload: { error: res.data.error },
				});
			}
		}
	};
};

export const getBooking = id => {
	return async dispatch => {
		dispatch({ type: bookingConstants.GET_BOOKING_REQUEST });
		const res = await axios.get(id);
		if (res.status === 201) {
			dispatch({
				type: bookingConstants.GET_BOOKING_SUCCESS,
				payload: { book: res.data.movie },
			});
		} else {
			dispatch({
				type: bookingConstants.GET_BOOKING_FAILURE,
				payload: { error: res.data.error },
			});
		}
	};
};
