import { combineReducers } from "redux";
import userReducer from "./user.reducers";
import authReducer from "./auth.reducers";
import moviesReducer from "./movies.reducer";
import movieReducer from "./movie.reducer";
import cartReducer from "./cart.reducer";
import theaterReducer from "./theater.reducers";
import bookingsReducer from "./bookings.reducers";
import bookingReducer from "./booking.reducers";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  movies: moviesReducer,
  movie: movieReducer,
  cart: cartReducer,
  theaters: theaterReducer,
  bookings: bookingsReducer,
  booking: bookingReducer,
});

export default rootReducer;
