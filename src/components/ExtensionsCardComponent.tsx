import Dotted from "../assets/bg-dots.svg";

interface Props {
	img: string;
	text: string;
	version: string;
	translate?: number;
}

const CardComponent: React.FC<Props> = ({ img, text, version, translate }) => {
	return (
		<div
			className={`bg-white shadow-md flex flex-col justify-center items-center w-full p-4 rounded-lg mb-10
				${translate == 0 ? "" : translate == 1 ? "translate-y-low" : "translate-y-high"}`}>
			<img src={img} alt="" />
			<h2 className="text-VeryDarkBlue text-2xl font-medium py-4">Add to {text}</h2>
			<p className="text-md pb-6 text-GrayishBlue ">Minimum version {version}</p>
			<img className="w-full" src={Dotted} alt="" />
			<button className="cursor-pointer w-[90%] hover:text-SoftBlue hover:bg-white border-2 border-SoftBlue text-sm bg-SoftBlue text-white p-4 mt-6 mb-2 rounded-lg shadow-md">
				Add & Install Extension
			</button>
		</div>
	);
};

export default CardComponent;
