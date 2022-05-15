import { authConstants } from "../actions/constants";
const initState = {
  token: null,
  user: {
    username: "",
    role: "",
    fullNaame: "",
    sliit_id: "",
    phone: "",
    email: "",
    research_interest: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;

    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
  }

  return state;
};
