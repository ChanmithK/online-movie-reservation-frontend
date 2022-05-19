import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import menu from "../../images/menu.png";
import close from "../../images/close.png";

function HeaderTwo() {
	const [burgerStatus, setBurgerStatus] = useState(false);

	const displayMenu = () => {
		if (burgerStatus == false) {
			return <div></div>;
		} else {
			return (
				<div className='bg-white w-[20rem] h-screen z-2 absolute right-0 top-0 text-2xl text-left'>
					<button
						onClick={() => {
							setBurgerStatus(false);
						}}>
						<img src={close} className='ml-[17rem] mt-8' />
					</button>

					<ul className='my-12 mx-24'>
						<li className=''>Profile</li>
						<li className='mt-16'>
							<Link to='/user/cart/getCartItems'>Cart</Link>
						</li>
						<li className=' mt-16'>
							<Link to='/res'>Reservations</Link>
						</li>
						<button
							onClick={() => {
								window.localStorage.clear();

								window.location.reload(false);
							}}>
							<li className='mt-[15rem]'>Logout</li>
						</button>
					</ul>
				</div>
			);
		}
	};

	return (
		<div className=''>
			<div className='grid grid-cols-2 gap-[48rem] mx-40 py-4 '>
				<div className=''>
					<Link to='/home-page'>
						<p className='font-regular text-xl text-white py-1'>VOX CINEMAZ</p>
					</Link>
				</div>
				<div className='grid grid-cols-1'>
					<button
						onClick={() => {
							setBurgerStatus(true);
						}}>
						<img src={menu} className='w-6 ml-16 py-2' />
					</button>
				</div>
			</div>
			{displayMenu()}
		</div>
	);
}

export default HeaderTwo;
