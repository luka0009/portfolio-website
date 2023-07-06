import { motion } from "framer-motion";

const Transition = () => {
	return (
		<>
			<motion.div
				initial={{ x: "100%", width: "100%" }}
				animate={{ x: "0%", width: "0%" }}
				transition={{ duration: 1.2, ease: "easeInOut" }}
				exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
				className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-purple-800"
			/>
			<motion.div
				initial={{ x: "100%", width: "100%" }}
				animate={{ x: "0%", width: "0%" }}
				transition={{ delay: 0.2, duration: 1.2, ease: "easeInOut" }}
				className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-white"
			/>
			<motion.div
				initial={{ x: "100%", width: "100%" }}
				animate={{ x: "0%", width: "0%" }}
				transition={{ delay: 0.4, duration: 1.2, ease: "easeInOut" }}
				className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-black"
			/>
		</>
	);
};

export default Transition;
