import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../actions/user.actions";

function RegisterForm() {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [re_hash_password, setRePassword] = useState("");

	const dispatch = useDispatch();

	const userRegister = e => {
		// e.preventDefault();
		const user = {
			fullName,
			email,
			phone,
			password,
			re_hash_password,
		};
		console.log(user);
		dispatch(register(user));
	};
	return (
		<div>
			<h1 className='font-bold text-xl  font-bold text-4xl text-black mt-14 mb-4 text-left'>
				Register
			</h1>
			<div className='w-96 text-left mt-12'>
				<label
					for='fullName'
					className=" text-base text-slate-700 font-normal after:content-['*'] after:ml-0.5 after:text-red-500 w-96">
					Name
				</label>
			</div>
			<input
				type='text'
				value={fullName}
				onChange={e => setFullName(e.target.value)}
				className='font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
			/>
			<br />
			<div className='w-96 text-left'>
				<label
					for='fname'
					className="text-base text-slate-700 font-normal after:content-['*'] after:ml-0.5 after:text-red-500 ">
					Email:
				</label>
			</div>

			<input
				type='email'
				value={email}
				onChange={e => setEmail(e.target.value)}
				className='font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
			/>
			<br />
			<div className='w-96 text-left'>
				<label
					for='lname'
					className="text-base text-slate-700 font-normal after:content-['*'] after:ml-0.5 after:text-red-500 ">
					Phone:
				</label>
			</div>

			<input
				type='text'
				value={phone}
				onChange={e => setPhone(e.target.value)}
				className='font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
			/>
			<br />
			<div className='w-96 text-left'>
				<label
					for='fname'
					className="text-base text-slate-700 font-normal after:content-['*'] after:ml-0.5 after:text-red-500 ">
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
			<div className='w-96 text-left'>
				{" "}
				<label
					for='lname'
					className="text-base text-slate-700 font-normal after:content-['*'] after:ml-0.5 after:text-red-500 ">
					Re-Enter Password:
				</label>
			</div>

			<input
				type='password'
				value={re_hash_password}
				onChange={e => setRePassword(e.target.value)}
				className='font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
			/>
			<br />
			<button
				className='mt-5 font-normal text-lg mt-1 px-3 py-1 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md hover:bg-main-orangedrk-active'
				onClick={() => {
					userRegister();
				}}>
				Register
			</button>
		</div>
	);
}

export default RegisterForm;
