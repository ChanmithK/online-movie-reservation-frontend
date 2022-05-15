import { movieConstants } from "../actions/constants";

const initState = {
  movies: [],
  moviesByShowing: {
    //This productByPrice is object so we can't use map function to display this details in product container
    nowShowing: [],
    commingSoonShowing: [],
  },
  pageRequest: false,
  page: {},
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case movieConstants.GET_ALL_MOVIE_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case movieConstants.GET_ALL_MOVIE_SUCCESS:
      state = {
        ...state,
        movies: action.payload.movies,
        moviesByShowing: {
          ...action.payload.moviesByShowing,
        },
        pageRequest: false,
      };
      break;
    case movieConstants.GET_ALL_MOVIE_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
