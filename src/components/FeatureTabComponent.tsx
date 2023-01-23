interface Props {
	img: string;
	title: string;
	text: string;
}

const FeatureTabComponent: React.FC<Props> = ({ img, title, text }) => {
	return (
		<div className="mt-12">
			<div className="relative flex justify-center items-center">
				<div className="absolute -translate-x-8 bottom-0 left-0 bg-SoftBlue w-full h-[200px] ml-auto rounded-r-full z-0"></div>
				<img className="relative  mb-10" src={img} alt="" />
			</div>
			<div className="flex flex-col justify-center items-center text-center pt-12">
				<h1 className="text-VeryDarkBlue text-2xl font-medium">{title}</h1>
				<p className="text-md py-6 text-GrayishBlue">{text}</p>
			</div>
		</div>
	);
};

export default FeatureTabComponent;
