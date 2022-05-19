import axios from "../helpers/axios";
import { bookingConstants } from "./constants";

export const AddBooking = (booking) => {
  return async (dispatch) => {
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

export const getAllBookings = () => {
  return async (dispatch) => {
    dispatch({ type: bookingConstants.GET_ALL_BOOKING_REQUEST });
    const res = await axios.get("/admin/allBookings");
    console.log("ALL THE BOOKINS:", res.data);

    if (res.status === 200) {
      dispatch({
        type: bookingConstants.GET_ALL_BOOKING_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: bookingConstants.GET_ALL_BOOKING_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getBooking = (id) => {
  return async (dispatch) => {
    dispatch({ type: bookingConstants.GET_BOOKING_REQUEST });
    const res = await axios.get("/user/booking/" + id);
    console.log("Booking Details:", res.data);
    if (res.status === 201) {
      dispatch({
        type: bookingConstants.GET_BOOKING_SUCCESS,
        payload: { booking: res.data.booking },
      });
    } else {
      dispatch({
        type: bookingConstants.GET_BOOKING_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const RemoveBookingDetails = (item) => {
  return async (dispatch) => {
    //   dispatch({ type: cartConstants.REMOVE_FROM_CART_REQUEST });
    const res = await axios.delete("/user/booking/delete/" + item);

    if (res.status === 202) {
      // const { message } = res.data;
      dispatch({
        //   type: cartConstants.ADD_TO_CART_SUCCESS,
        //   payload: {
        // 	message,
        //   },
      });
    } else {
      if (res.status === 400) {
        //   dispatch({
        // 	type: cartConstants.REMOVE_FROM_CART_FAILURE,
        // 	payload: { error: res.data.error },
        //   });
      }
    }
  };
};
