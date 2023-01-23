import React, { useEffect, useState } from "react";
import bookmarkLogo from "../assets/logo-bookmark.svg";
import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import HamburgerIcon from "../assets/icon-hamburger.svg";
import CloseBtn from "../assets/icon-close.svg";
const Header = () => {
	const [openNav, setOpenNav] = useState(false);

	// Stop page from scrolling when navbar is open
	useEffect(() => {
		openNav ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
	}, [openNav]);

	return (
		<header className="flex justify-between  items-center p-8 ">
			<img className={`${openNav ? "hidden" : ""}`} src={bookmarkLogo} alt="Bookmark logo" />
			<img
				className={`${openNav ? "hidden" : ""}`}
				src={HamburgerIcon}
				alt="Hamburger icon"
				onClick={() => setOpenNav((prev) => !prev)}
			/>
			<nav className="hidden lg:flex">
				<ul className="flex gap-4">
					<li>Features</li>
					<li>Pricing</li>
					<li>Contact</li>
					<li>Login</li>
				</ul>
			</nav>
			{/* Navbar fixed, appears from the right side */}
			<nav
				className={`fixed z-10 flex flex-col justify-between gap-10 p-4 py-10 text-2xl text-white opacity-[95%] bg-VeryDarkBlue inset-0 
                        transition-all ease-in duration-500 ${openNav ? "top-0" : "hidden"}`}>
				<div className="">
					<div className="flex items-center justify-between pb-10">
						<img
							className="cursor-pointer saturate-0 invert h-7"
							src={bookmarkLogo}
							alt=""
							onClick={() => setOpenNav(false)}
						/>
						<img
							className="cursor-pointer h-4 opacity-80 px-4 translate-x-4"
							src={CloseBtn}
							alt="Close button"
							onClick={() => setOpenNav(false)}
						/>
					</div>
					<ul className="flex flex-col justify-center items-center gap-1">
						<li className="border-y-[1px] cursor-pointer uppercase p-4 w-full text-center text-GrayishBlue opacity-80  border-GrayishBlue hover:text-white">
							Features
						</li>
						<li className="border-b-[1px] cursor-pointer uppercase p-4 w-full text-center text-GrayishBlue opacity-80  border-GrayishBlue hover:text-white">
							Pricing
						</li>
						<li className="border-b-[1px] cursor-pointer uppercase p-4 w-full text-center text-GrayishBlue opacity-80  border-GrayishBlue hover:text-white">
							Contact
						</li>
						<li className="border-[2px] uppercase mt-4 p-4 w-full text-center text-white  border-white rounded-lg cursor-pointer">
							Login
						</li>
					</ul>
				</div>
				<div className="flex gap-10 justify-center items-center">
					<img className="cursor-pointer " src={FacebookIcon} alt="" />
					<img className="cursor-pointer " src={TwitterIcon} alt="" />
				</div>
			</nav>
		</header>
	);
};

export default Header;
