import { useState } from "react";
import { skills } from "../data/skills";
// import image from "../assets/webdev1.png";
import { motion } from "framer-motion";
import Skills from "../components/Skills";
//@ts-expect-error use hooks types
import { useWindowSize } from "@uidotdev/usehooks";
import Transition from "../components/Transition";

const About = () => {
	const [hover, setHover] = useState(false);
	const windowSize = useWindowSize();

	return (
		<>
			{/* <TransitionEffect /> */}
			<Transition />
			{/* <AnimatePresence mode="wait"> */}
			<motion.div
			// initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
			// animate={{ clipPath: "polygon(0 0, 0% 100%, 100% 100%, 100% 0)" }}
			// exit={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
			// transition={{
			//   duration: 0.75,
			//   ease: "easeInOut",
			// }}
			// initial={{ clipPath: "polygon(59% 41%, 100% 0, 0 100%, 46% 54%, 100% 0, 0 100%)" }}
			// animate={{ clipPath: "polygon(0 0, 100% 0, 0 100%, 100% 100%, 100% 0, 0 100%)" }}
			// exit={{ clipPath: "polygon(0 0, 100% 0, 0 100%, 100% 100%, 100% 0, 0 100%)" }}
			// transition={{
			//   duration: 1,
			//   ease: "easeInOut",
			// }}
			// className="base-page-size"
			>
				<div
					className="
    bg-[#1F0A3A] 
    pb-8 w-full min-h-screen h-fit text-white p-2"
				>
					<span className="mx-3 mt-2 text-base md:text-xl lg:text-4xl">
						About Me 
					</span>
					<div className="flex flex-col">
						<div className="flex items-center justify-center">
							<motion.div
								// style={{ y: -500 }}
								// animate={{ y: 0 }}
								// transition={{ duration: 1.2 }}
								className="p-3 text-xs md:text-md lg:text-xl lg:mt-[-40px]"
							>
								<p className="mt-4">
									I am a Full Stack developer with over 2 years of programming
									experience. I'm Skilled in various programming languages and
									technologies, mostly in Javascript language and its
									frameworks, especially in React, React Native, and Vue. These
									frameworks, along with their ecosystem, are my expertise.
								</p>
								<br />
								<p>
									Throughout my career, I've had the opportunity to work on
									diverse projects, where I've showcased my skills in developing
									and designing solutions. I have a deep understanding of modern
									JavaScript frameworks and always follow industry best
									practices and standards. My expertise extends to both frontend
									architecture and client-side application & web development as
									well as full-stack applications using technologies such as
									Node.js with Express.js or full stack frameworks like Next.js or
									Nuxt.js.
								</p>
							</motion.div>
							<motion.img
								style={{ x: 500 }}
								animate={{ x: 0 }}
								transition={{ duration: 1.2 }}
								src={
									"https://www.pngmart.com/files/22/Web-Designing-Transparent-PNG.png"
								}
								alt="Picture of the author"
								className="hidden md:block md:w-[320px] md:h-[320px] lg:w-[500px] lg:h-[350px] mr-5 scale-90  brightness-90"
								loading="lazy"
							/>
						</div>
						{windowSize.width < 1020 ? (
							<motion.div
								style={{ y: 500 }}
								animate={{ y: 0 }}
								transition={{ duration: 1.2 }}
								className="flex flex-col items-center justify-center"
							>
								<h1 className="mt-6 text-lg md:text-2xl lg:text-4xl mb-5">
									Skills
								</h1>
								<div className="mt-5 grid grid-cols-5 md:grid-cols-7 gap-3 md:gap-5 lg:gap-9">
									{skills.map((skill) => (
										<div
											key={skill.id}
											onMouseEnter={() => setHover(true)}
											onMouseLeave={() => setHover(false)}
											className="
											flex justify-center items-center rounded-full 
											w-10 h-10 md:w-16 md:h-16 bg-[#1A0B2E] 
											transition duration-1000 
											hover:scale-125 cursor-pointer"
										>
											<img
												src={skill.image}
												alt={skill.name}
												className="w-6 h-6 md:w-12 md:h-12 relative"
												loading="lazy"
												decoding="async"
											/>
											<span className="absolute top-[-25px] width-[100px] transition duration-500 text-[10px] md:text-base">
												{hover && skill.name}
											</span>
										</div>
									))}
								</div>
							</motion.div>
						) : (
							<Skills />
						)}
					</div>
				</div>
			</motion.div>
			{/* </AnimatePresence> */}
		</>
	);
};

export default About;
