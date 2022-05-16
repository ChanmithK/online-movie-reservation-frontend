import { cartConstants } from "../actions/constants";

const initState = {
  cartItems: {},
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case cartConstants.GET_TO_CART_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case cartConstants.GET_TO_CART_SUCCESS:
      state = {
        ...state,
        cartItems: action.payload.cartItemList,
        pageRequest: false,
      };
      break;
    case cartConstants.GET_TO_CART_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
