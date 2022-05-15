import React from "react";

function Header() {
	return (
		<div>
			<div className='flex flex-row w-scree justify-center'>
				<div className='w-full px-48 py-4 flex flex-row justify-between'>
					<p className='font-bold'>VOX CINEMAZ</p>
					<div className='w-40 flex flex-row justify-between font-medium'>
						<button className='hover:underline font-medium'>Sign in</button>
						<button className='hover:bg-main-orangedrk bg-main-orange py-1 px-2 rounded-lg text-white font-medium'>
							Register
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
