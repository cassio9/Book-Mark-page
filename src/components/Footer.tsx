import BookMarkLogo from "../assets/logo-bookmark.svg";
import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";

const Footer = () => {
	return (
		<div className="bg-VeryDarkBlue flex flex-col justify-between items-center py-4 font-Rubik">
			<img className="contrast-0 invert my-4" src={BookMarkLogo} alt="" />
			<ul className="text-white p-4 uppercase">
				<li>Features</li>
				<li className="py-4">Pricing</li>
				<li>Contact</li>
			</ul>
			<div className="flex gap-10 justify-center items-center my-4">
				<img className="cursor-pointer " src={FacebookIcon} alt="" />
				<img className="cursor-pointer " src={TwitterIcon} alt="" />
			</div>
		</div>
	);
};

export default Footer;
