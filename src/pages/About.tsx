import { useState } from "react";
import { skills } from "../data/skills";
import image from "../assets/webdev1.png";
import { motion } from "framer-motion";

const About = () => {
  const [hover, setHover] = useState(false);

  return (
    // <AnimatePresence mode="wait">
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
        className="bg-[#1F0A3A]
    bg-gradient-to-r from-[#1F0A3A] via-black to-[#1F0A3A] 
    pb-8 w-full min-h-screen h-fit text-white p-2"
      >
        <span className="mx-3 mt-2 text-base md:text-xl lg:text-4xl">
          About Me
        </span>
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <motion.div
              style={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2 }}
              className="p-3 text-xs md:text-md lg:text-lg"
            >
              <p>
                I am passionate Frontend/Full Stack Web developer with a desire
                to learn and grow in a collaborative team environment. I am
                Skilled in various programming languages and technologies,
                mostly in Javascript language, especially in react and its
                ecosystem.
              </p>
              <br />
              <p>
                As a web developer, I have had the opportunity to develop and
                architect solutions for web projects using modern JavaScript
                frameworks while adhering to industry best practices and
                standards. I have experience in both frontend architecture and
                development of client web applications and websites, as well as
                full-stack applications using the MERN stack and NextJS.
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
        </div>
      </div>
    </motion.div>
    // </AnimatePresence>
  );
};

export default About;
