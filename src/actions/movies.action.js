import axios from "../helpers/axios";
import { movieConstants } from "./constants";

export const getAllMovies = () => {
  return async (dispatch) => {
    dispatch({ type: movieConstants.GET_ALL_MOVIE_REQUEST });
    const res = await axios.get("/admin/movies");

    if (res.status === 200) {
      dispatch({
        type: movieConstants.GET_ALL_MOVIE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: movieConstants.GET_ALL_MOVIE_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
