import React from "react";
import { motion } from "framer-motion";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import scss from "../assets/skills/scss.png";
import js from "../assets/skills/js.png";
import ts from "../assets/skills/ts.png";
import react from "../assets/skills/react.png";
import redux from "../assets/skills/redux.png";
import vue from "../assets/skills/vue.png";
import tailwind from "../assets/skills/tailwind.png";
import bootstrap from "../assets/skills/bootstrap.png";
import npm from "../assets/skills/npm.png";
import git_github from "../assets/skills/git-github.png";
import node from "../assets/skills/node.png";
import express from "../assets/skills/express.png";
import mongodb from "../assets/skills/mongodb.png";
import MySQL from "../assets/skills/MySQL.png";
import firebase from "../assets/skills/firebase.png";

const Skill = ({ name, x, y, image, className }: any) => {
  return (
    <motion.div
      className="flex justify-center items-center rounded-full font-semibold bg-black text-white p-2 px-4 absolute"
      initial={{ x: 0, y: 9 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between gap-x-3 items-center">
        <img src={image} className={`w-8 h-8`} style={className} />
        {name}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl w-full text-center md:text-6xl">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full"
        style={{
          background:
            "repeating-radial-gradient(pink 2px, #1F0A3A 5px, #1F0A3A 100px)",
        }}
      >
        <motion.div className="flex justify-center items-center rounded-full font-semibold bg-black text-white p-2 px-4">
          Web
        </motion.div>
        <Skill name="HTML" image={html} x="-5vw" y="-13vw" />
        <Skill name="CSS" image={css} x="-20vw" y="2vw" />
        <Skill name="Tailwind" image={tailwind} x="-32vw" y="2vw" />
        <Skill name="JS" image={js} x="5vw" y="10vw" />
        <Skill name="TS" image={ts} x="18vw" y="-8vw" />
        <Skill name="Bootstrap" image={bootstrap} x="20vw" y="-15vw" />
        <Skill
          name="Express"
          image={express}
          x="-20vw"
          y="-15vw"
          className={{ filter: "brightness(0) invert(1)" }}
        />
        <Skill name="React" image={react} x="20vw" y="15vw" />
        <Skill name="Firebase" image={firebase} x="-26vw" y="12vw" />
        <Skill name="Vue" image={vue} x="0vw" y="17vw" />
        <Skill name="Git" image={git_github} x="22vw" y="0vw" />
        <Skill
          name="Prisma"
          image="https://i.pinimg.com/originals/39/b2/e4/39b2e4ad77c23a2c11e5950a7dfa2aec.png"
          x="-32vw"
          y="-7vw"
        />
        <Skill name="MongoDB" image={mongodb} x="-18vw" y="-8vw" />
        <Skill name="MySQL" image={MySQL} x="-13vw" y="9vw" />
        <Skill name="npm" image={npm} x="35vw" y="0vw" />
        <Skill
          name="Next.js"
          image="https://files.raycast.com/4dnlt8m2mcb98bzc4zb8pggc4csi"
          x="7vw"
          y="-13vw"
        />
        <Skill name="Node.js" image={node} x="16vw" y="7vw" />
        <Skill name="Redux" image={redux} x="30vw" y="7vw" />
        <Skill name="SCSS" image={scss} x="30vw" y="-7vw" />
        <Skill
          name="Pinia"
          image="https://user-images.githubusercontent.com/6919381/149651295-0bf814f5-ad07-4d40-9af2-78dd99d8e1e7.png"
          x="0vw"
          y="-19vw"
        />
      </div>
    </>
  );
};

export default Skills;
