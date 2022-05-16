import { theaterConstants } from "../actions/constants";

const initState = {
  theaters: [],
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case theaterConstants.GET_ALL_THEATER_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case theaterConstants.GET_ALL_THEATER_SUCCESS:
      state = {
        ...state,
        theaters: action.payload.theaters,
        pageRequest: false,
      };
      break;
    case theaterConstants.GET_ALL_THEATER_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
