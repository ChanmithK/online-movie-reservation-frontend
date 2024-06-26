import { moviesConstants } from "../actions/constants";

const initState = {
  movies: [],
  moviesByShowing: {
    nowShowing: [],
    commingSoonShowing: [],
  },
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case moviesConstants.GET_ALL_MOVIE_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case moviesConstants.GET_ALL_MOVIE_SUCCESS:
      state = {
        ...state,
        movies: action.payload.movies,
        moviesByShowing: {
          ...action.payload.moviesByShowing,
        },
        pageRequest: false,
      };
      break;
    case moviesConstants.GET_ALL_MOVIE_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
