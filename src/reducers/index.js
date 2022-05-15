import { combineReducers } from "redux";
import userReducer from "./user.reducers";
import authReducer from "./auth.reducers";

const rootReducer = combineReducers({
  user: userReducer,
  //   auth: authReducer,
});

export default rootReducer;
