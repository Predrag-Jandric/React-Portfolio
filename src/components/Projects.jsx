import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsVariants, generalVariants } from "../utils/animations.js";
import Button from "./Button";
import { projectsMap } from "../utils/data.js";
import { useEffect } from "react";

// import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    // Scroll to previous position if available
    const savedScrollPosition = sessionStorage.getItem(
      "projectsScrollPosition"
    );
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
      sessionStorage.removeItem("projectsScrollPosition"); // Clear after restoring
    }
  }, []);

  const handleLinkClick = () => {
    // Save current scroll position before navigating away
    sessionStorage.setItem("projectsScrollPosition", window.scrollY);
  };

  return (
    <motion.div
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex items-center justify-center mx-1"
      id="projects"
    >
      <div className="grid grid-cols-1 text-grayText gap-20 place-items-center lg:grid-cols-2 xs:px-5 px-3">
        {projectsMap.map((project, index) => (
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
            <span className="absolute border border-gray-300 bg-primary rounded-full py-1 text-sm font-semibold px-4 top-6 right-6 ">
              {project.effort}
            </span>

            {/* Card text */}
            <article className="flex flex-col items-center justify-center gap-4 px-6 text-body">
              <h3 className="text-headings font-medium font-headings">
                {project.name}
              </h3>
              <p>{project.description}</p>
            </article>

            {/* technologies used */}
            <article className="flex flex-col px-6 text-body">
              <h4 className="font-medium">Technologies used:</h4>
              <div className="flex flex-wrap flex-row items-center justify-start gap-2">
                {project.TechUsed.map((techused, techIndex) => (
                  <p className="flex-wrap" key={techIndex}>
                    {techused}
                  </p>
                ))}
              </div>
            </article>

            {/* Buttons */}
           
              <Link
                target="_blank"
                to={`/projects/${project.id}`}
                onClick={handleLinkClick}
                className="flex w-56 mx-auto items-center justify-center  mb-10"
              >
                <Button className="w-56">View Details</Button>
              </Link>
            
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
}
