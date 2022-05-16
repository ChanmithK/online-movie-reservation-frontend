import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddtoCart, getMovie } from "../../actions/movies.action";
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

  // function AddCart(params) {
  //   useEffect(() => {
  //     console.log("I am here", params);
  //     dispatch(AddCart(params));
  //   }, [AddCart]);
  // }

  const AddCart = (id) => {
    // e.preventDefault();
    const data = {
      cartItems: {
        movie: id,
      },
    };
    console.log(data);
    dispatch(AddtoCart(data));
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
          onClick={() => {
            AddCart(movie.movie._id);
          }}
        >
          <Link to="/user/cart/getCartItems">Add to Cart</Link>
        </button>
      </div>
    );
  }
}

export default Movie;
