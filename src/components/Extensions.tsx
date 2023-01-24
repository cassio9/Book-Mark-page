import CardComponent from "./ExtensionsCardComponent";
import ChromeLogo from "../assets/logo-chrome.svg";
import FirefoxLogo from "../assets/logo-firefox.svg";
import OperaLogo from "../assets/logo-opera.svg";

const Extensions = () => {
	return (
		<div className="flex flex-col justify-center items-center text-center p-6">
			<h2 className="text-VeryDarkBlue text-2xl font-medium">Download the extension</h2>
			<p className="text-md py-6 text-GrayishBlue max-w-lg">
				We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite
				you’d like us to prioritize.
			</p>
			<div className="lg:flex gap-6 lg:pb-10">
				<CardComponent img={ChromeLogo} text={"Chrome"} version={"62"} translate={0} />
				<CardComponent img={FirefoxLogo} text={"Firefox"} version={"55"} translate={1} />
				<CardComponent img={OperaLogo} text={"Opera"} version={"46"} translate={2} />
			</div>
		</div>
	);
};

export default Extensions;
