import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsVariants, generalVariants } from "../../utils/animations.js";
import Button from "../Button.jsx";
import { projectsMap } from "../../utils/data.js";
import { IoEnter } from "react-icons/io5";

export default function Projects() {
  return (
    <motion.div
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mx-1 flex items-center justify-center"
      id="projects"
    >
      <div className="grid grid-cols-1 place-items-center gap-20 px-3 text-grayText xs:px-5 lg:grid-cols-2">
        {projectsMap.map((project, index) => (
          <motion.section
            key={project.id}
            variants={projectsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="relative flex h-full w-full max-w-[32.5rem] flex-col gap-8 overflow-hidden rounded-custom bg-pureWhite shadow-md transition-all hover:shadow-lg"
          >
            <div className="group relative">
              <img
                src={project.projectsImageUrl}
                alt="project photo"
                className="w-full"
              />

              <Link
                to={`/${encodeURIComponent(project.name.toLowerCase().replace(/\s+/g, "-"))}`}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-xl bg-black bg-opacity-55 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <IoEnter className="text-6xl" />
                <span className="text-center font-semibold">View Details</span>
              </Link>
            </div>
            {project.effort && (
              <span className="absolute right-6 top-6 rounded-full bg-primary px-4 py-1 text-sm font-semibold">
                {project.effort}
              </span>
            )}

            {/* card text */}
            <article className="flex flex-col items-center justify-center gap-4 px-6 text-body">
              <h3 className="font-headings text-headings font-medium">
                {project.name}
              </h3>
              <p>{project.description}</p>
            </article>

            {/* technologies used */}
            <article className="flex flex-col px-6 text-body">
              <h4 className="mb-0.5 text-[0.95rem] font-semibold">
                Technologies used:
              </h4>
              <div>
                {project.TechUsed.map((techused, techIndex) => (
                  <span className="text-[0.95rem]" key={techIndex}>
                    {techused}
                  </span>
                ))}
              </div>
            </article>

            <Link
              to={`/${encodeURIComponent(project.name.toLowerCase().replace(/\s+/g, "-"))}`}
              className="mx-auto mb-10 mt-auto flex w-56 items-center justify-center"
            >
              <Button className="w-56">View Details</Button>
            </Link>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
}
