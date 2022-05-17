import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { getCart, RemoveFromCart } from "../../actions/movies.action";
import Header from "../../components/Layouts/HeaderTwo";
import "./style.css";

function Cart() {
	const cart = useSelector(state => state.cart);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCart());
	}, []);

	const RemoveCartItem = id => {
		// e.preventDefault();
		const data = {
			id: id,
		};
		console.log(data);
		dispatch(RemoveFromCart(data));
		window.location.reload(false);
	};

	return (
		<div className='bg-scope-blue w-screen h-screen'>
			<Header />
			<h3 className='text-white font-medium text-4xl text-left mx-[10rem] mt-[5rem]'>
				Cart
			</h3>

			<table className='ml-[10rem] mt-8'>
				<div className='w-[70rem]'>
					<thead>
						<tr className='text-lg font-medium bg-white '>
							<th className='w-[30rem] text-left'>Movie Name</th>
							<th className='w-[15rem] text-left'>Price</th>
							<th className='w-[20rem] text-center'>Action</th>
						</tr>
					</thead>
				</div>

				<div className='example h-64 overflow-y-scroll w-[66rem]'>
					<tbody className=' bg-white'>
						{cart.cartItems.length > 0
							? cart.cartItems.map(cart =>
									cart.cartItems.map(test => (
										<tr className='text-lg  '>
											<td className='w-[30rem] text-left'>
												{test.movie.movieName}
											</td>
											<td className='w-[15rem] text-left'>
												{test.movie.price}
											</td>
											<td className='w-[20rem] text-center flex gap-2 justify-center'>
												<button
													className='hover:bg-main-purpledrk bg-main-purple  px-3 rounded-xl text-white font-medium text-left'
													onClick={() => {
														RemoveCartItem(test._id);
													}}>
													Remove
												</button>
												<button className='hover:bg-main-orangedrk bg-main-orange  px-3 rounded-xl text-white font-medium text-left'>
													<Link to={"/user/booking/" + test.movie._id}>
														Continue
													</Link>
												</button>
											</td>
										</tr>
									)),
							  )
							: null}
					</tbody>
				</div>
			</table>
		</div>
	);
}

export default Cart;
