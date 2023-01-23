const SignUp = () => {
	return (
		<div className="p-4 bg-SoftBlue">
			<div className="flex flex-col justify-center items-center text-center py-12 px-4">
				<h1 className="text-white uppercase text-md tracking-widest ">35.000+ already joined</h1>
				<h1 className="text-white text-2xl font-medium py-4">
					Stay up-to-date with what we’re doing
				</h1>
				<form className="w-full">
					<input
						type="email"
						name="email"
						placeholder="Enter your email address"
						className="w-full p-2 rounded-md "
						id=""
						required
					/>
					<button className="bg-SoftRed text-white py-2 font-medium w-full my-4 rounded-md ">
						Contact Us
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
