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
			<h2 className="font-bold text-8xl w-full text-center md:text-6xl my-8">
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
					Software Development
				</motion.div>
				<Skill name="HTML" image={html} x="-5vw" y="-13vw" />
				<Skill name="CSS" image={css} x="-20vw" y="2vw" />
				<Skill name="Tailwind" image={tailwind} x="-32vw" y="2vw" />
				<Skill name="JS" image={js} x="5vw" y="10vw" />
				<Skill name="TS" image={ts} x="18vw" y="-8vw" />
				<Skill name="Bootstrap" image={bootstrap} x="21vw" y="-15vw" />
				<Skill
					name="Express"
					image={express}
					x="-20vw"
					y="-15vw"
					className={{ filter: "brightness(0) invert(1)" }}
				/>
				<Skill name="React" image={react} x="20vw" y="15vw" />
				<Skill name="Firebase" image={firebase} x="-26vw" y="12vw" />
				<Skill name="Vue" image={vue} x="3vw" y="17vw" />
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
					x="9vw"
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
				<Skill
					name="Supabase"
					image="data:image/png;base64,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"
					x="-14vw"
					y="16vw"
				/>
			</div>
		</>
	);
};

export default Skills;
