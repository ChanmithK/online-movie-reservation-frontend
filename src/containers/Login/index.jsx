import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth.actions";
import { Navigate } from "react-router";
import RightLayout from "../../components/Layouts/RightLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const notify = () => {
		toast.warn("Fill the Required Fields!", {
			position: "bottom-left",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
	};

	const userLogin = e => {
		const user = {
			email,
			password,
		};
		dispatch(login(user));
	};

	if (auth.authenticate) {
		return <Navigate to={"/home-page"} />;
	}

	return (
		<div className='grid grid-cols-2 h-screen lg:grid-cols-2 sm:grid-cols-1'>
			<div className='h-full'>
				<div className='ml-32 mr-8'>
					<h1 className='font-bold text-xl  font-bold text-4xl text-black mt-14 mb-4 text-left'>
						Login
					</h1>
					<div>
						<div className='w-96 text-left mt-24'>
							<label className="text-lg text-base text-slate-700 font-normal after:content-['*'] after:ml-0.5 after:text-red-500 w-96">
								Email:
							</label>
						</div>

						<input
							type='text'
							value={email}
							onChange={e => setEmail(e.target.value)}
							className='font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
						/>
						<br />
						<div className='w-96 text-left mt-4'>
							<label className="text-lg text-base text-slate-700 font-normal after:content-['*'] after:ml-0.5 after:text-red-500 w-96">
								Password:
							</label>
						</div>

						<input
							type='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							className='font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
						/>
						<br />
						<ToastContainer
							position='top-right'
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
						/>
						<button
							className='mt-8 font-normal text-lg mt-1 px-3 py-1 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md hover:bg-main-orangedrk cursor-pointer'
							onClick={() => {
								if (email == "" || password == "") {
									notify();
								} else {
									userLogin();
								}
							}}>
							Submit
						</button>
					</div>
				</div>
			</div>
			<RightLayout />
		</div>
	);
};

export default Login;
