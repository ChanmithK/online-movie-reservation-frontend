import axios from "../helpers/axios";
import { movieConstants, moviesConstants } from "./constants";

export const getAllMovies = () => {
  return async (dispatch) => {
    dispatch({ type: moviesConstants.GET_ALL_MOVIE_REQUEST });
    const res = await axios.get("/admin/movies");

    if (res.status === 200) {
      dispatch({
        type: moviesConstants.GET_ALL_MOVIE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: moviesConstants.GET_ALL_MOVIE_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getMovie = (id) => {
  return async (dispatch) => {
    dispatch({ type: movieConstants.GET_MOVIE_REQUEST });
    const res = await axios.get(id);
    if (res.status === 201) {
      dispatch({
        type: movieConstants.GET_MOVIE_SUCCESS,
        payload: { movie: res.data.movie },
      });
    } else {
      dispatch({
        type: movieConstants.GET_MOVIE_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
