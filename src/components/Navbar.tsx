import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div
			className="relative z-99
       bg-[#1A0B2E] 
       bg-gradient-to-bl from-[#1A0B2E] via-slate-900 to-purple-900 
       w-full h-fit py-5 px-4 text-white flex justify-between items-center text-sm sm:text-base md:text-lg lg:text-xl"
		>
			<div className="hidden md:block">
				<Link to="/" className="cursor-pointer">
					Luka Barbakadze
				</Link>
			</div>
			<div className="block md:hidden">
				<Link to="/" className="cursor-pointer">
					Luka
				</Link>
			</div>
			<div className="flex justify-center items-center gap-3">
				<Link to="/">
					<span className="cursor-pointer">Home</span>
				</Link>
				<Link to="/about">
					<span className="cursor-pointer">About/Skills</span>
				</Link>
				<Link to="/projects">
					<span className="cursor-pointer">Projects</span>
				</Link>
				<a href="https://github.com/luka0009" target="_blank">
					<span className="cursor-pointer text-green-500 font-bold">My Github</span>
				</a>
			</div>
		</div>
	);
};

export default Navbar;
