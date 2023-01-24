import { useState } from "react";
import Feature1Img from "../assets/illustration-features-tab-1.svg";
import Feature2Img from "../assets/illustration-features-tab-2.svg";
import Feature3Img from "../assets/illustration-features-tab-3.svg";
import FeatureTabComponent from "./FeatureTabComponent";

const Features = () => {
	const [tabFeatures, setTabFeatures] = useState(1);

	return (
		<div className="flex flex-col justify-center items-center text-center p-6">
			<h2 className="text-VeryDarkBlue text-2xl font-medium">Features</h2>
			<p className="text-md py-6 text-GrayishBlue max-w-lg">
				Our aim is to make it quick and easy for you to access your favorite websites. Your
				bookmarks sync between your devices so you can access them on the go.
			</p>
			<ul className="flex flex-col justify-center w-full items-center gap-1 max-w-2xl lg:flex-row ">
				<li
					onClick={() => setTabFeatures(1)}
					className={`relative border-y-[1px] lg:border-t-0 cursor-pointer p-4 w-full text-center border-GrayishBlue ${
						tabFeatures == 1
							? "after:content-[''] after:w-28 lg:after:w-full after:h-1 after:bg-red-600 after:absolute after:left-[50%] after:-translate-x-[50%] after:bottom-0 font-medium"
							: "text-GrayishBlue"
					}  `}>
					Simple Bookmarking
				</li>
				<li
					onClick={() => setTabFeatures(2)}
					className={`relative border-b-[1px] cursor-pointer p-4 w-full text-center border-GrayishBlue ${
						tabFeatures == 2
							? "after:content-[''] after:w-24 lg:after:w-full after:h-1 after:bg-red-600 after:absolute after:left-[50%] after:-translate-x-[50%] after:bottom-0 font-medium"
							: "text-GrayishBlue"
					}  `}>
					Speedy Searching
				</li>
				<li
					onClick={() => setTabFeatures(3)}
					className={`relative border-b-[1px] cursor-pointer p-4 w-full text-center border-GrayishBlue ${
						tabFeatures == 3
							? "after:content-[''] after:w-24 lg:after:w-full after:h-1 after:bg-red-600 after:absolute after:left-[50%] after:-translate-x-[50%] after:bottom-0 font-medium"
							: "text-GrayishBlue"
					}  `}>
					Easy Sharing
				</li>
			</ul>
			<div className="lg:w-full">
				{tabFeatures === 1 ? (
					<FeatureTabComponent
						img={Feature1Img}
						title={"Bookmark in one click"}
						text={
							"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites."
						}
					/>
				) : tabFeatures === 2 ? (
					<FeatureTabComponent
						img={Feature2Img}
						title={"Intelligent search"}
						text={
							"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
						}
					/>
				) : (
					<FeatureTabComponent
						img={Feature3Img}
						title={"Share your bookmarks"}
						text={
							"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
						}
					/>
				)}
			</div>
		</div>
	);
};

export default Features;
