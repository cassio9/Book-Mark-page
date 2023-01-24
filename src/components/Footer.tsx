import BookMarkLogo from "../assets/logo-bookmark light.svg";
import FacebookIcon from "../assets/icon-facebook.svg";
import FacebookIconRed from "../assets/icon-facebookRed.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import TwitterIconRed from "../assets/icon-twitterRed.svg";
import { useState } from "react";

const Footer = () => {
	const [hoverFacebook, setHoverFacebook] = useState(false);
	const [hoverInst, setHoverInst] = useState(false);

	return (
		<div className="lg:flex lg:justify-around bg-VeryDarkBlue lg:items-center">
			<div className=" flex flex-col justify-between items-center py-4 font-Rubik lg:flex-row">
				<img className="my-4" src={BookMarkLogo} alt="" />
				<ul className="text-white p-4 uppercase text-center lg:flex lg:items-center lg:gap-10 lg:translate-x-14">
					<li className="hover:text-SoftRed cursor-pointer">Features</li>
					<li className="py-4 hover:text-SoftRed cursor-pointer">Pricing</li>
					<li className="hover:text-SoftRed cursor-pointer">Contact</li>
				</ul>
			</div>
			<div className="flex gap-10 justify-center items-center my-4">
				{hoverFacebook ? (
					<img
						className="cursor-pointer"
						src={FacebookIconRed}
						alt="Facebook logo"
						onMouseLeave={() => setHoverFacebook(false)}
					/>
				) : (
					<img
						className="cursor-pointer"
						src={FacebookIcon}
						alt=""
						onMouseEnter={() => setHoverFacebook(true)}
					/>
				)}
				{hoverInst ? (
					<img
						className="cursor-pointer hover:fill-SoftRed"
						src={TwitterIconRed}
						alt=""
						onMouseLeave={() => setHoverInst(false)}
					/>
				) : (
					<img
						className="cursor-pointer"
						src={TwitterIcon}
						alt=""
						onMouseEnter={() => setHoverInst(true)}
					/>
				)}
			</div>
		</div>
	);
};

export default Footer;
