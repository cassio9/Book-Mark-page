import HeroImg from "../assets/illustration-hero.svg";
const Hero = () => {
	return (
		<div className="p-4 pt-12 lg:grid lg:grid-cols-[1fr,1fr]">
			<div className="relative z-0 flex justify-center lg:order-2 ">
				<div className="absolute bottom-0 right-0 bg-SoftBlue md:w-1/2 w-4/5 h-[200px] ml-auto rounded-l-full z-0 translate-x-4 "></div>
				<div className="max-w-lg">
					<img className="relative z-0 " src={HeroImg} alt="" />
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center pt-16 pb-8 px-4 lg:max-w-lg lg:justify-self-end lg:justify-start lg:items-start">
				<h1 className="text-VeryDarkBlue text-3xl font-medium"> A Simple Bookmark Manager</h1>
				<p className="text-md py-6 text-GrayishBlue mb-4 max-w-lg lg:text-left">
					A clean and simple interface to organize your favorite websites. Open a new browser tab
					and see your sites load instantly. Try it for free.
				</p>
				<div className="flex gap-4">
					<button className="border-2 border-SoftBlue hover:text-SoftBlue hover:bg-white cursor-pointer py-4 text-sm bg-SoftBlue text-white px-4 rounded-lg shadow-md">
						Get it on Chrome
					</button>
					<button className="bg-gray-100 border-2 border-gray-100 hover:border-VeryDarkBlue hover:text-VeryDarkBlue hover:bg-white cursor-pointer text-VeryDarkBlue py-4 text-sm  px-4 rounded-lg shadow-md">
						Get it on Firefox
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
