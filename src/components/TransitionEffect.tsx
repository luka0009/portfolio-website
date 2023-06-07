import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        initial={{ x: "160%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-pink-600"
      />
      <motion.div
        initial={{ x: "160%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay:0.2, duration: 1.2, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-white"
      />
      <motion.div
        initial={{ x: "160%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay:0.4, duration: 1.2, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-black"
      />
    </>
  );
};

export default TransitionEffect;