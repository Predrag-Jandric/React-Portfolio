import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import { projectsVariants, generalVariants } from "../utils/animations.js";
import Button from "./Button";

// data for map method
export const projectsMap = [
  {
    name: "1Project_name1",
    description:
      "1111Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum officiis fuga magni exercitationem! Temporibus aspernatur eum ab ipsa blanditiis, excepturi recusandae dignissimos accusantium minus debitis ipsam voluptas ipsum veniam nobis!",
    projectsImageUrl: "/assets/projects/frame.png",
    effort: "Solo project",
    TechUsed: ["Javascript", "Css", "Sass", "Html"],
    githubLink: "./",
    previewLink: "./",
    id: 456264,
    buildTime: "5 weeks",
    teamSize: "3 people",
  },
  {
    name: "2Project_name2",
    description:
      "2222Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum officiis fuga magni exercitationem! Temporibus aspernatur eum ab ipsa blanditiis, excepturi recusandae dignissimos accusantium minus debitis ipsam voluptas ipsum veniam nobis!",
    projectsImageUrl: "/assets/projects/frame.png",
    effort: "Team effort",
    TechUsed: ["React", "Tailwind", "Redux Toolkit", "MongoDB"],
    githubLink: "./",
    previewLink: "./",
    id: 234234,
  },
];

export default function Projects() {
  return (
    <motion.div
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex items-center justify-center"
      id="projects"
    >
      <div className="grid grid-cols-1 text-grayText gap-20 place-items-center lg:grid-cols-2 xs:px-5 px-3">
        {projectsMap.map((project, index,) => (
          <motion.section
            key={project.id}
            variants={projectsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="relative w-full max-w-[32.5rem] bg-pureWhite flex flex-col gap-8 rounded-custom shadow-md overflow-hidden"
          >
            <img
              src={project.projectsImageUrl}
              alt="project photo"
              className=""
            />
            <span className="absolute bg-primary rounded-full py-1 px-4 top-6 right-6 text-body">
              {project.effort}
            </span>

            {/* Card text */}
            <article className="flex flex-col items-center justify-center gap-4 px-6 text-body">
              <h3 className="text-headings font-medium font-headings">
                {project.name}
              </h3>
              <p>{project.description}</p>
            </article>

            {/* Technologies used */}
            <article className="flex flex-col gap-2 px-6 text-body">
              <h4 className="font-medium">Technologies used</h4>
              <div className="flex flex-wrap flex-row items-center justify-start gap-2">
                {project.TechUsed.map((techused, techIndex) => (
                  <p
                    className="border border-1 border-grayBorder  rounded-full py-0.1 px-4 flex flex-wrap"
                    key={techIndex}
                  >
                    {techused}
                  </p>
                ))}
              </div>
            </article>

            {/* Buttons */}
            <article className="px-6 flex items-center justify-center  mb-10">
              <Link to={`/projects/${project.id}`}>
                <Button className="w-full">View Details</Button>
              </Link>
            </article>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
}
