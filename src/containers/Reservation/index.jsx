import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import {
  getAllBookings,
  RemoveBookingDetails,
} from "../../actions/booking.actions";
import Header from "../../components/Layouts/HeaderTwo";

function Cart() {
  const bookings = useSelector((state) => state.bookings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

  console.log("BOOKINGS REDUCER:", bookings);

  const RemoveBooking = (id) => {
    // e.preventDefault();
    // console.log(id);
    dispatch(RemoveBookingDetails(id));
    window.location.reload(false);
  };

  return (
    <div className="bg-scope-blue w-screen h-screen">
      <Header />
      <h3 className="text-white font-medium text-4xl text-left mx-[10rem] mt-[5rem]">
        Cart
      </h3>

      <table className="ml-[10rem] mt-8">
        <div className="w-[70rem]">
          <thead>
            <tr className="text-lg font-medium bg-white ">
              <th className="w-[30rem] text-left">Movie Name</th>
              <th className="w-[30rem] text-left">Actions</th>
            </tr>
          </thead>
        </div>

        <div className="example h-64 overflow-y-scroll w-[66rem]">
          <tbody className=" bg-white">
            {bookings.bookings.length > 0
              ? bookings.bookings.map((booking) => (
                  <tr className="text-lg  ">
                    <td className="w-[30rem] text-left">{booking.movieId}</td>
                    <td className="w-[20rem] text-center flex gap-2 justify-center">
                      <button
                        className="hover:bg-main-purpledrk bg-main-purple  px-3 rounded-xl text-white font-medium text-left"
                        onClick={() => {
                          RemoveBooking(booking._id);
                        }}
                      >
                        Remove
                      </button>
                      <button className="hover:bg-main-orangedrk bg-main-orange  px-3 rounded-xl text-white font-medium text-left">
                        <Link to={"/user/booking/pdf/" + booking._id}>
                          Continue
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </div>
      </table>
    </div>
  );
}

export default Cart;
