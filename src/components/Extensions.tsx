import CardComponent from "./ExtensionsCardComponent";
import ChromeLogo from "../assets/logo-chrome.svg";
import FirefoxLogo from "../assets/logo-firefox.svg";
import OperaLogo from "../assets/logo-opera.svg";

const Extensions = () => {
	return (
		<div className="flex flex-col justify-center items-center text-center p-6">
			<h2 className="text-VeryDarkBlue text-2xl font-medium">Download the extension</h2>
			<p className="text-md py-6 text-GrayishBlue ">
				We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite
				you’d like us to prioritize.
			</p>
			<CardComponent img={ChromeLogo} text={"Chrome"} version={"62"} />
			<CardComponent img={FirefoxLogo} text={"Firefox"} version={"55"} />
			<CardComponent img={OperaLogo} text={"Opera"} version={"46"} />
		</div>
	);
};

export default Extensions;
