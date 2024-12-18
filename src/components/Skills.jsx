// animation imports
import { motion } from "framer-motion";
import { skillsVariants, generalVariants } from "/animations";


// data for map method
const skillsMap = [
  { name: "Html", skillsImageUrl: "/assets/skills/html.png" },
  { name: "Css", skillsImageUrl: "/assets/skills/css.png" },
  { name: "JavaScript", skillsImageUrl: "/assets/skills/js.png" },
  { name: "React", skillsImageUrl: "/assets/skills/react.png" },
  {
    name: "Redux Toolkit",
    skillsImageUrl: "/assets/skills/redux-toolkit.png",
  },
  { name: "Next.js", skillsImageUrl: "/assets/skills/nextjs.png" },
  { name: "Sass", skillsImageUrl: "/assets/skills/sass.png" },
  { name: "Tailwind", skillsImageUrl: "/assets/skills/tailwind.png" },
  { name: "Git", skillsImageUrl: "/assets/skills/git.png" },
  { name: "Figma", skillsImageUrl: "/assets/skills/figma.png" },
];

export default function Skills() {
  return (
    <motion.div
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      
      <section className="flex flex-col items-center justify-center gap-16 py-16 bg-dark shadow-md">
        <article className="grid gap-8 text-center text-lg font-normal md:grid-cols-5 grid-cols-2">
          {skillsMap.map((skill, index) => (
            <motion.div
              className="flex flex-col items-center justify-center gap-0 text-white"
              variants={skillsVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              key={index}
            >
              <img
                src={skill.skillsImageUrl}
                alt="image missing"
                className="w-[7rem] h-[7rem]"
              />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </article>
      </section>
    </motion.div>
  );
}
