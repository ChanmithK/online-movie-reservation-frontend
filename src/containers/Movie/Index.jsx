import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../actions/movies.action";
import { useLocation, Link } from "react-router-dom";
import { imgURL } from "../../urlConfig";

function Movie(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const movie = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getMovie(location.pathname));
  }, []);

  console.log(movie);

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
      <button style={{ background: "red" }}>
        <Link to="/Hello">Add to Cart</Link>
      </button>
    </div>
  );
}

export default Movie;
