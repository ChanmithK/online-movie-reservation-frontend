import axios from "../helpers/axios";
import { theaterConstants } from "./constants";

export const getAllTheaters = () => {
  return async (dispatch) => {
    dispatch({ type: theaterConstants.GET_ALL_THEATER_REQUEST });
    const res = await axios.get("/admin/getTheaters");

    console.log("res.data", res.data);
    if (res.status === 200) {
      dispatch({
        type: theaterConstants.GET_ALL_THEATER_SUCCESS,
        payload: { theaters: res.data.theaters },
      });
    } else {
      dispatch({
        type: theaterConstants.GET_ALL_THEATER_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

// export const AddTheater = (item) => {
//   return async (dispatch) => {
//     dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
//     const res = await axios.post("/user/cart/addtocard", {
//       ...item,
//     });

//     if (res.status === 201) {
//       const { message } = res.data;
//       dispatch({
//         type: cartConstants.ADD_TO_CART_SUCCESS,
//         payload: {
//           message,
//         },
//       });
//     } else {
//       if (res.status === 400) {
//         dispatch({
//           type: cartConstants.ADD_TO_CART_FAILURE,
//           payload: { error: res.data.error },
//         });
//       }
//     }
//   };
// };
