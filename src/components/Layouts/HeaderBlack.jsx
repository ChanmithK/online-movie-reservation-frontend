import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import menu from "../../images/menu2.png";

function HeaderBlack() {
	return (
		<div className=''>
			<div className='grid grid-cols-2 gap-[48rem] mx-40 py-4'>
				<div className=''>
					<Link to='/home-page'>
						<p className='font-regular text-xl text-black py-1'>VOX CINEMAZ</p>
					</Link>
				</div>
				<div className='grid grid-cols-1'>
					<Link to='#'>
						<img src={menu} className='w-6 ml-16 py-2' />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default HeaderBlack;
