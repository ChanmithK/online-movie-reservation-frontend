import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../actions/movies.action";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Layouts/Header";
import { imgURL } from "../../urlConfig";

function Booking() {
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getMovie("/admin/movies/" + id));
  }, []);
  console.log(movie);
  console.log(movie);
  //   const AddCart = (id) => {
  //     // e.preventDefault();
  //     const data = {
  //       cartItems: {
  //         movie: id,
  //       },
  //     };
  //     console.log(data);
  //     dispatch(AddtoCart(data));
  //   };
  const [noOfSeats, setnoOfSeats] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [theater, setTheater] = useState("");

  const userRegister = (e) => {
    // e.preventDefault();
    const user = {
      noOfSeats,
      date,
      time,
      theater,
    };
    console.log(user);
    // dispatch(reg(user));
  };

  if (movie.movie.moviePictures) {
    return (
      <div>
        <div>
          <img src={imgURL(movie.movie.moviePictures[0].img)} alt="" />
        </div>
        <div>{movie.movie.movieName}</div>
        <div>{movie.movie.description}</div>
        <div>Rs.{movie.movie.price}</div>
        <div>
          <br></br>{" "}
        </div>
        <button
          style={{ background: "red" }}
          // onClick={() => {
          // AddCart(movie.movie._id);
          // }}
        >
          <Link to="/user/cart/getCartItems">Add to Cart</Link>
        </button>
        <div>
          <h1 className="font-bold text-xl  font-bold text-xl text-black mt-14 mb-4 text-left">
            Register
          </h1>
          <div className="w-96 text-left">
            <label
              for="fullName"
              className="text-base text-slate-700 font-normal after:content-['*'] after:ml-0.5 after:text-red-500 w-96"
            >
              Name
            </label>
          </div>
          <input
            type="text"
            value={noOfSeats}
            onChange={(e) => setnoOfSeats(e.target.value)}
            className="font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1"
          />
          <br />
          <br />
          <div className="w-96 text-left">
            <label
              for="fname"
              className="text-base text-slate-700 font-normal after:content-['*'] after:ml-0.5 after:text-red-500 "
            >
              Email:
            </label>
          </div>

          <input
            type="email"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1"
          />
          <br />
          <div className="w-96 text-left">
            <label
              for="lname"
              className="text-base text-slate-700 font-normal after:content-['*'] after:ml-0.5 after:text-red-500 "
            >
              Phone:
            </label>
          </div>

          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1"
          />
          <br />
          <div className="w-96 text-left">
            <label
              for="fname"
              className="text-base text-slate-700 font-normal after:content-['*'] after:ml-0.5 after:text-red-500 "
            >
              Password:
            </label>
          </div>

          <input
            type="password"
            value={theater}
            onChange={(e) => setTheater(e.target.value)}
            className="font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1"
          />
          <br />
          <button
            className="mt-5 font-normal text-lg mt-1 px-3 py-1 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md hover:bg-main-orangedrk-active"
            onClick={() => {
              userRegister();
            }}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Booking;
