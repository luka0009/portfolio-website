import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { motion } from "framer-motion";

interface Props {
  project: any;
}

export default function Project({ project }: Props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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
      transition={{ duration: 1 }}
    >
      <div className="text-[24px] text-white flex flex-col justify-start items-center gap-3">
        <span className="font-semibold md:mb-6 text-xl md:text-2xl lg:text-3xl">{project.name}</span>
        <div
          className="relative cursor-pointer scale-90 md:scale-100 flex flex-col justify-start items-center w-[250px] h-[240px]"
          onMouseOver={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
        >
          <img
            className={`object-cover transition duration-1000 w-[250px] h-[240px] border-2 p-1 py-3 
            ${isMouseOver && "opacity-40"} rounded-md`}
            src={project.image}
            alt={project.name}
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
          <span className="font-semibold text-lg md:text-xl lg:text-2xl">Tech stack: </span>
          <span className="bg-[#1A0B2E] text-white px-2 py-1 text-xs md:text-lg xl:text-xl">
            {project.stack}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
