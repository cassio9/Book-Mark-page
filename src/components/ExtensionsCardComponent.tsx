import Dotted from "../assets/bg-dots.svg";

interface Props {
	img: string;
	text: string;
	version: string;
}

const CardComponent: React.FC<Props> = ({ img, text, version }) => {
	return (
		<div className="bg-white shadow-md flex flex-col justify-center items-center w-full p-4 rounded-lg mb-10">
			<img src={img} alt="" />
			<h2 className="text-VeryDarkBlue text-2xl font-medium py-4">Add to {text}</h2>
			<p className="text-md pb-6 text-GrayishBlue ">Minimum version {version}</p>
			<img className="w-full" src={Dotted} alt="" />
			<button className="cursor-pointer w-[90%]  text-sm bg-SoftBlue text-white p-4 mt-6 mb-2 rounded-lg shadow-md">
				Add & Install Extension
			</button>
		</div>
	);
};

export default CardComponent;
