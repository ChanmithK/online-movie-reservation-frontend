import { bookingConstants } from "../actions/constants";

const initState = {
  bookings: {},
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case bookingConstants.GET_BOOKING_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case bookingConstants.GET_BOOKING_SUCCESS:
      state = {
        ...state,
        bookings: action.payload.booking,
        pageRequest: false,
      };
      break;
    case bookingConstants.GET_BOOKING_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
