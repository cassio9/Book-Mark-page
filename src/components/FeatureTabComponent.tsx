interface Props {
	img: string;
	title: string;
	text: string;
}

const FeatureTabComponent: React.FC<Props> = ({ img, title, text }) => {
	return (
		<div className="mt-12 flex flex-col items-center lg:grid lg:grid-cols-[2.5fr,2fr] lg:gap-10 xl:gap-0 lg:items-center ">
			<div className="relative flex justify-center items-center">
				<div className="absolute -translate-x-[160px] md:-translate-x-[290px] bottom-0 left-0 bg-SoftBlue w-[100%] h-[200px] lg:h-[300px] ml-auto rounded-r-full z-0 md:w-[110%]"></div>
				<img className="relative  mb-10" src={img} alt="" />
			</div>
			<div className="flex flex-col justify-center items-center text-center pt-12 lg:flex-[3] max-w-md lg:max-w-sm lg:justify-start lg:items-start">
				<h1 className="text-VeryDarkBlue text-2xl font-medium text-start">{title}</h1>
				<p className="text-md py-6 text-GrayishBlue lg:text-start">{text}</p>
			</div>
		</div>
	);
};

export default FeatureTabComponent;
