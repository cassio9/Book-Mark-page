import HeroImg from "../assets/illustration-hero.svg";
const Hero = () => {
	return (
		<div className="p-4 pt-10">
			<div className="relative z-0 flex justify-center">
				<div className="absolute bottom-0 right-0 bg-SoftBlue w-4/5 h-[200px] ml-auto rounded-l-full z-0 translate-x-4"></div>
				<img className="relative z-0" src={HeroImg} alt="" />
			</div>
			<div className="flex flex-col justify-center items-center text-center py-12 px-4">
				<h1 className="text-VeryDarkBlue text-3xl font-medium"> A Simple Bookmark Manager</h1>
				<p className="text-md py-6 text-GrayishBlue mb-4">
					A clean and simple interface to organize your favorite websites. Open a new browser tab
					and see your sites load instantly. Try it for free.
				</p>
				<div className="flex gap-4">
					<button className="cursor-pointer py-4 text-sm bg-SoftBlue text-white px-4 rounded-lg shadow-md">
						Get it on Chrome
					</button>
					<button className="cursor-pointer text-VeryDarkBlue py-4 text-sm  px-6 rounded-lg shadow-md">
						Get it on Firefox
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
