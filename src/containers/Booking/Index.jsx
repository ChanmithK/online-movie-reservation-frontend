import React, { useState, useEffect } from "react";
import Header from "../../components/Layouts/HeaderBlack";
import Doctor from "../../images/doctor.png";
import Form from "../../components/Layouts/BookingForm";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../actions/movies.action";
import { Link, useParams } from "react-router-dom";
import { imgURL } from "../../urlConfig";
import { getAllTheaters } from "../../actions/theater.action";
import { AddBooking } from "../../actions/booking.actions";
import PayemntOptions from "../../components/Layouts/PaymentOption";
import PhoneOne from "../../components/Layouts/PhoneFormOne";
import PhoneTwo from "../../components/Layouts/PhoneFormTwo";
import CardForm from "../../components/Layouts/CreditCardForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Booking() {
  const [page, setPage] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const notify = () => {
    toast.success("Payment Successful", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const movie = useSelector((state) => state.movie);
  const theaterStore = useSelector((state) => state.theaters);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovie("/admin/movies/" + id));
    dispatch(getAllTheaters());
  }, []);

  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [theater, setTheater] = useState("");
  const [noOfSeats, setnoOfSeats] = useState("");

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <div className="">
          <Form
            page={page}
            setPage={setPage}
            startDate={startDate}
            setStartDate={setStartDate}
            time={time}
            setTime={setTime}
            theater={theater}
            setTheater={setTheater}
            noOfSeats={noOfSeats}
            setnoOfSeats={setnoOfSeats}
          />
        </div>
      );
    } else if (page === 1) {
      return (
        <div className="">
          <PayemntOptions page={page} setPage={setPage} />
          <button
            className=" font-normal text-lg mt-24 px-3 py-1 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md hover:bg-main-orangedrk-active"
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Back
          </button>
        </div>
      );
    } else if (page === 2) {
      return (
        <div className="">
          <PhoneOne />
          <button
            className=" font-normal text-lg mt-1 px-3 py-1 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md hover:bg-main-orangedrk-active"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </button>
          <button
            className=" font-normal text-lg mt-1 px-3 py-1 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md hover:bg-main-orangedrk-active"
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Back
          </button>
        </div>
      );
    } else if (page === 3) {
      return (
        <div className="">
          <PhoneTwo />
          <button
            className=" font-normal text-lg mt-1 px-3 py-1 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md hover:bg-main-orangedrk-active"
            disabled={disabled}
            onClick={() => {
              reserve();
              notify();
              setDisabled(true);
            }}
          >
            Proceed
          </button>
        </div>
      );
    } else if (page === 4) {
      return (
        <div className="">
          <CardForm />
          <button
            className=" font-normal text-lg mt-1 px-3 py-1 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md hover:bg-main-orangedrk-active"
            disabled={disabled}
            onClick={() => {
              reserve();
              notify();
              setDisabled(true);
            }}
          >
            Proceed
          </button>
          <button
            className=" font-normal text-lg mt-1 px-3 py-1 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[28rem] sm:w-144 rounded-md hover:bg-main-orangedrk-active"
            onClick={() => {
              setPage(1);
            }}
          >
            Back
          </button>
        </div>
      );
    }
  };

  const reserve = () => {
    const reservation = {
      movieId: movie.movie.movieName,
      date: startDate,
      time: time,
      theater: theater,
      noOfSeats: noOfSeats,
    };
    console.log("Menna theater eka::", theater);
    console.log("RESERVATION", reservation);
    dispatch(AddBooking(reservation));
  };

  if (movie.movie.moviePictures) {
    return (
      <div className="bg-[#4A47A3]/5 h-screen w-screen">
        <Header />
        <div className="grid grid-cols-2 mx-[10rem]">
          <div className="text-black">
            <h3 className="font-medium text-lg text-left mt-8 uppercase">
              {movie.movie.movieName}
            </h3>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <ToastContainer />
            {pageDisplay()}
          </div>
          <div className="">
            <img
              src={imgURL(movie.movie.moviePictures[0].img)}
              className="w-[19rem] mt-8 ml-[11rem] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
