import { movieConstants } from "../actions/constants";

const initState = {
  movie: {},
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case movieConstants.GET_MOVIE_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case movieConstants.GET_MOVIE_SUCCESS:
      state = {
        ...state,
        movie: action.payload.movie,
        pageRequest: false,
      };
      break;
    case movieConstants.GET_MOVIE_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
