import React from "react";
import RightLayout from "../../components/Layouts/RightLayout";
import RegisterForm from "../../components/Layouts/RegisterForm";

function Register() {
	return (
		<div className='grid grid-cols-2 h-screen lg:grid-cols-2 sm:grid-cols-1'>
			<div className='h-full'>
				<div className='ml-32 mr-8'>
					<RegisterForm />
				</div>
			</div>
			<RightLayout />
		</div>
	);
}

export default Register;
