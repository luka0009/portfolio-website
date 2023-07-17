import { useState, useRef } from "react";
import { useClickAway, useWindowSize } from "react-use";
import { motion } from "framer-motion";

interface Props {
	project: any;
}

export default function Project({ project }: Props) {
	const [isMouseOver, setIsMouseOver] = useState(false);
	const [isClicked, setIsClicked] = useState(false);
	const windowSize = useWindowSize();


	const ref = useRef(null);
	useClickAway(ref, () => {
		setIsClicked(false);
	});

	function clickAlert() {
		alert("\nNot Yet deployed.\n\nCheck out the code on Github.");
	}

	const initialPosition = project.id % 2 === 0 ? { x: 500 } : { x: -500 };

	return (
		<motion.div
			style={initialPosition}
			animate={{ x: 0 }}
			transition={{ delay: 0.8, duration: 1 }}
		>
			<div className="text-[24px] text-white flex flex-col justify-start items-center md:gap-3">
				<div className="relative md:mb-6">
					<span className="font-semibold md:mb-6 text-xl md:text-2xl lg:text-3xl">
						{project.name}
					</span>
					{(project.id === 703 && windowSize.width > 1180) && (
						<>
						<div className={`hidden lg:block h-1 bg-white w-[340px] absolute top-[200px] left-[320px] ${windowSize.width > 1380 && `left-[403px]`}`} />
						<span className={`hidden lg:block text-white absolute top-[159px] left-[640px] text-[50px] ${windowSize.width > 1380 && `left-[721px]`}`}> {`>`} </span>
						</>
					)}
				</div>
				<div
					className="relative cursor-pointer scale-[0.8] my-[-10px] md:mb-1 md:scale-100 flex flex-col justify-start items-center w-[250px] h-[240px]"
					onMouseOver={() => setIsMouseOver(true)}
					onMouseLeave={() => setIsMouseOver(false)}
				>
					<img
						className={`object-cover transition duration-1000 w-[250px] h-[240px] border-2 p-1 py-3 
            ${isMouseOver && "opacity-40"} rounded-md ${
							project.id === 703 && "object-contain"
						}`}
						src={project.image}
						alt={project.name}
						loading="lazy"
						decoding="async"
					/>
					{isMouseOver && (
						<span className="text-center underline w-full contrast-150 px-4 py-1 cursor-pointer absolute bg-slate-800 text-cyan-500 top-0">
							{project.website !== "Not Yet Deployed" ? (
								<a target="_blank" href={project.website}>
									See Website
								</a>
							) : (
								<button onClick={clickAlert}>See Website</button>
							)}
						</span>
					)}
					{isMouseOver && (
						<span className="text-center underline w-full contrast-150 px-4 py-1 cursor-pointer absolute bg-slate-800 text-cyan-500  bottom-0">
							<a href={project.code} target="_blank">
								Source Code
							</a>
						</span>
					)}
					{isMouseOver && (
						<span
							onClick={() => setIsClicked((prevState) => !prevState)}
							className="text-center underline contrast-150 px-4 py-1 cursor-pointer absolute bg-slate-800 text-cyan-500 bottom-[40%] w-full"
						>
							See Description
						</span>
					)}
					{isClicked && (
						<div
							ref={ref}
							className="text-left text-xs md:text-base lg:text-lg absolute flex flex-col justify-start w-[340px] md:w-[450px] h-fit max-h-[480px] overflow-y-auto z-99 bg-slate-800 text-cyan-500 p-5"
						>
							<button
								onClick={() => {
									setIsClicked(false);
									setIsMouseOver(false);
								}}
								className="bg-red-600 text-white w-[30px]"
							>
								X
							</button>
							<br />
							{project.description}
						</div>
					)}
				</div>
				<div className="mt-1 flex flex-col gap-1">
					<span className="font-semibold text-lg md:text-xl lg:text-2xl">
						Tech stack:{" "}
					</span>
					<span className="bg-[#1A0B2E] text-white px-2 py-1 text-xs md:text-lg xl:text-xl">
						{project.stack}
					</span>
				</div>
			</div>
		</motion.div>
	);
}
