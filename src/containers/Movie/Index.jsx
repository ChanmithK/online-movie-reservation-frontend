import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddtoCart, getMovie } from "../../actions/movies.action";
import { useLocation, Link } from "react-router-dom";
import { imgURL } from "../../urlConfig";
import Strange from "../../images/StrangeCover.png";
import Header from "../../components/Layouts/HeaderTwo";

function Movie(props) {
	const dispatch = useDispatch();
	const location = useLocation();
	const movie = useSelector(state => state.movie);

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

	const AddCart = id => {
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
				<div className='relative'>
					<div className='absolute'>
						<Header />
						<div className='grid rows-3 text-white text-left mx-[5rem] mt-[28rem]'>
							<p className='font-medium text-lg mx-1 bg-main-orange w-[20.3rem] pl-[0.2rem] ml-[0.1rem]'>
								NOW SHOWIING AT VOX CINEMAS
							</p>
							<p className='font-semibold text-5xl'>{movie.movie.movieName}</p>
							<p className='font-medium text-lg mx-1 mt-1'>2 HR 06 MIN</p>
						</div>
					</div>
					<img className='w-screen h-screen' src={Strange} />
				</div>
				<div className=''>
					<h3 className='text-left text-[40px] mx-[5rem] mt-[1rem]'>
						STORY LINE
					</h3>
					<p className='w-[1140px] text-left mx-[5rem]'>
						{movie.movie.description}
					</p>
					<div className='flex mt-8 mx-[5rem] gap-4'>
						<p>Ticket Price</p>
						<p className='font-semibold'>Rs.{movie.movie.price}</p>
						{/* <p className='font-semibold'>ADVENTURE</p>
						<p className='font-semibold'>FANTACY</p> */}
					</div>
					<div className='grid grid-cols-1 w-[8rem] mx-[5rem] mt-8 mb-8'>
						<button className='hover:bg-main-orangedrk text-lg bg-main-orange py-1 px-4 rounded-lg text-white font-medium text-left'>
							<Link to='/user/cart/getCartItems'>Add to Cart</Link>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Movie;
