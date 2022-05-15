import { combineReducers } from "redux";
import userReducer from "./user.reducers";
import authReducer from "./auth.reducers";
import moviesReducer from "./movies.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  movies: moviesReducer,
});

export default rootReducer;
