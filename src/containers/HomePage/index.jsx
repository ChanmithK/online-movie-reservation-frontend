import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../actions/movies.action";
import { Link } from "react-router-dom";
import { imgURL } from "../../urlConfig";
import "./style.css";

function HomePage(props) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const [showingStatus, setShowingStatus] = useState({
    nowShowing: "NOW SHOWING",
    commingSoonShowing: "COMMING SOON",
  });
  console.log(movies);
  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <div>
      {Object.keys(movies.moviesByShowing).map((key, index) => {
        return (
          <div className="card">
            <div className="cardHeader">
              <div> {showingStatus[key]} </div>
            </div>
            <div style={{ display: "flex" }}>
              {movies.moviesByShowing[key].map((movie) => (
                <div className="movieContainer">
                  <div className="movieImgContainer">
                    <Link to={"/admin/movies/" + movie._id}>
                      <img src={imgURL(movie.moviePictures[0].img)} alt="" />
                    </Link>
                  </div>
                  <div>
                    <div>{movie.movieName}</div>
                    <div>Now Streaming</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
