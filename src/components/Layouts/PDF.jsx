import React, { useState, useEffect } from "react";
import Header from "../../components/Layouts/HeaderBlack";
import QRCode from "react-qr-code";
import ReactDOM from "react-dom";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBooking } from "../../actions/booking.actions";

function PDF() {
  const [movie, setMovie] = useState("The Batman");
  const [date, setdate] = useState("2022.07.08");
  const [time, setTime] = useState("11:30");
  const [seats, setSeats] = useState(2);
  const { id } = useParams();

  const booking = useSelector((state) => state.booking);
  console.log("BOOKING::", booking);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooking(id));
  }, []);

  return (
    <div>
      <Header />
      <h3 className="text-black font-bold text-4xl text-left mx-[10rem] mt-[2rem]">
        Ticket
      </h3>
      <div className="grid grid-cols-3 mx-[10rem] justify-items-start mt-24">
        <div className="">
          <div className="text-left">
            <h2 className="font-regular text-lg">Movie Name</h2>
            <p className="font-bold text-3xl">{booking.bookings.movieId}</p>
          </div>
          <div className="text-left mt-12">
            <h2 className="font-regular text-lg">Time</h2>
            <p className="font-bold text-3xl">{booking.bookings.time}</p>
          </div>
        </div>
        <div className="">
          <div className="text-left">
            <h2 className="font-regular text-lg">Date</h2>
            <p className="font-bold text-3xl">{booking.bookings.date}</p>
          </div>
          <div className="text-left">
            <h2 className="font-regular text-lg mt-12">Seat Count</h2>
            <p className="font-bold text-3xl">{booking.bookings.noOfSeats}</p>
          </div>
        </div>
        <div className="ml-[3rem]">
          <QRCode value={id} />,
        </div>
      </div>
    </div>
  );
}

export default PDF;
