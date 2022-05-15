import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
	return (
		<div className='z-100'>
			<div className='flex flex-row w-scree justify-center'>
				<div className='w-full px-48 py-4 flex flex-row justify-between'>
					<p className='font-bold'>VOX CINEMAZ</p>
					<div className='w-40 flex flex-row justify-between font-medium'>
						<Link to='/login'>
							<button className='hover:underline font-medium'>Sign in</button>
						</Link>

						<Link to='/register'>
							<button className='hover:bg-main-orangedrk bg-main-orange py-1 px-2 rounded-lg text-white font-medium'>
								Register
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
