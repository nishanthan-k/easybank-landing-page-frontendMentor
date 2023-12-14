import { useState } from "react";
import logoImg from "../../images/bg-intro-desktop.svg";
import HamburgerIcon from "../../images/icon-hamburger.svg";
import CloseIcon from "../../images/icon-close.svg";

const Navbar = () => {
	const [showHamburger, setShowHamburger] = useState(true);

	const toggleHamburger = () => {
		setShowHamburger(!showHamburger);
	};

	return (
		<>
			<div className="bg-red-200 text-sm">
				<nav className="w-screen px-4 py-4 flex justify-between relative">
					<div className="flex space-x-2">
						<img src={logoImg} alt="heello" width={30} />
						<span className="text-lg">easybank</span>
					</div>

					<ul
						className={`${
							showHamburger
								? "sm:hidden md:flex space-x-4 text-gray-600"
								: "h-max w-3/5 bg-red-500 absolute rounded top-16 left-20 px-10 py-6 text-black flex flex-col items-center space-x-0 space-y-2"
						}`}
					>
						{["Home", "About", "Contact", "Blog", "Careers"].map(
							(item, index) => (
								<li key={index}>
									<a href="#">{item}</a>
								</li>
							)
						)}
					</ul>

					<img
						src={showHamburger ? HamburgerIcon : CloseIcon}
						alt={showHamburger ? "Hamburger Icon" : "Close Icon"}
						className="md:hidden"
						onClick={toggleHamburger}
					/>

					{showHamburger && (
						<button className="hidden md:block bg-limeGreen rounded-2xl px-6">
							Request Invite
						</button>
					)}
				</nav>
			</div>
		</>
	);
};

export default Navbar;
