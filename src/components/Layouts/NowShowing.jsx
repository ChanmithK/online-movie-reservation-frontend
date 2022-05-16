import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../actions/movies.action";
import { Link } from "react-router-dom";
import { imgURL } from "../../urlConfig";
// import LostCity from "../../images/lostcity.png";

function NowShowing() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  console.log(movies);
  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <div>
      <div className="bg-scope-blue">
        <h3 className="text-3xl font-semibold text-left ml-[5rem] pt-4 mb-4 text-white">
          NOW SHOWING
        </h3>
        <div className="grid grid-cols-4 text-left justify-items-center mx-[3rem] text-white">
          {movies.moviesByShowing.nowShowing.map((movie) => (
            <div className="w-[16rem]">
              <Link to={"/admin/movies/" + movie._id}>
                <img src={imgURL(movie.moviePictures[0].img)} alt="" />
              </Link>
              <p className="font-semibold text-2xl pt-2 pl-1">
                {movie.movieName}
              </p>
              <p className="font-regular text-sm pb-8 pl-1">
                IN CINEMAS 8TH OCTOMBER
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NowShowing;
