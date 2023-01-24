import { useState } from "react";
import Error from "../assets/icon-error.svg";

const SignUp = () => {
	const [answer, setAnswer] = useState("");
	const [error, setError] = useState(false);

	const submitEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (answer == "" || answer.includes(".com") == false) {
			setError(true);
		} else {
			setError(false);
			setAnswer("Done");
			setTimeout(() => {
				setAnswer("");
			}, 1000);
		}
	};

	return (
		<div className="p-4 bg-SoftBlue">
			<div className="flex flex-col justify-center items-center py-12 px-4 max-w-lg mx-auto">
				<h1 className="text-white uppercase text-md tracking-widest">35.000+ already joined</h1>
				<h1 className="text-white text-2xl lg:text-3xl lg:max-w-md font-medium py-4 text-center">
					Stay up-to-date with what we’re doing
				</h1>
				<form
					className="w-full lg:grid lg:grid-cols-[2fr,1fr] lg:gap-4 lg:items-baseline"
					onSubmit={(e) => submitEmail(e)}>
					{error ? (
						<label
							htmlFor="email"
							className="relative py-1 italic text-white text-sm bg-SoftRed font-Rubik px-2 lg:px-6 w-full flex flex-col items-center lg:items-start rounded-lg ">
							<input
								type="email"
								name="email"
								id="email"
								value={answer}
								onChange={(e) => setAnswer(e.target.value)}
								placeholder="Enter your email address"
								className="lg:w-[112%] w-full lg:-translate-x-4 mb-1  px-4 py-2 rounded-md text-VeryDarkBlue focus:outline-none"
								required
							/>
							Whoops,make sure it's an email
							<span>
								<img className="absolute top-0 right-0 p-3" src={Error} alt="" />
							</span>
						</label>
					) : (
						<input
							type="email"
							name="email"
							id="email"
							value={answer}
							onChange={(e) => setAnswer(e.target.value)}
							placeholder="Enter your email address"
							className="w-full  px-4 py-2 rounded-md text-VeryDarkBlue focus:outline-none"
						/>
					)}
					<button className="bg-SoftRed text-white py-2 font-medium w-full my-4 rounded-md border-2 border-SoftRed hover:text-SoftRed hover:bg-white">
						Contact Us
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
