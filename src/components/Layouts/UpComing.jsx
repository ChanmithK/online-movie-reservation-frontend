import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../actions/movies.action";
import { Link } from "react-router-dom";
import { imgURL } from "../../urlConfig";

function UpComing() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const [showingStatus, setShowingStatus] = useState({
    // nowShowing: "NOW SHOWING",
    commingSoonShowing: "COMMING SOON",
  });
  console.log(movies);
  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <div>
      <div className="bg-white">
        <h3 className="text-3xl font-semibold text-left ml-[5rem] pt-4 mb-4 text-black">
          COMING SOON
        </h3>
        <div className="grid grid-cols-4 text-left justify-items-center mx-[3rem] text-black">
          {movies.moviesByShowing.commingSoonShowing.map((movie) => (
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

export default UpComing;
