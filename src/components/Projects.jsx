import { motion } from "framer-motion";
import { projectsVariants, generalVariants } from "/animations";
import Button from "./Button";

// data for map method
const projectsMap = [
  {
    name: "Project_name",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum officiis fuga magni exercitationem! Temporibus aspernatur eum ab ipsa blanditiis, excepturi recusandae dignissimos accusantium minus debitis ipsam voluptas ipsum veniam nobis!",
    projectsImageUrl: "/assets/projects/placeholder.png",
    TechUsedUrl: [
      "/assets/projects/techUsed/nextjs.png",
      "/assets/projects/techUsed/react.png",
      "/assets/projects/techUsed/tailwind.png",
      "/assets/projects/techUsed/sass.png",
    ],
    githubLink: "https://github.com/Predrag-Jandric/NodeJS-learning",
    previewLink: "https://peppy-profiterole-80df83.netlify.app/",
  },
  {
    name: "Project_name",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum officiis fuga magni exercitationem! Temporibus aspernatur eum ab ipsa blanditiis, excepturi recusandae dignissimos accusantium minus debitis ipsam voluptas ipsum veniam nobis!",
    projectsImageUrl: "/assets/projects/placeholder.png",
    TechUsedUrl: [
      "/assets/projects/techUsed/nextjs.png",
      "/assets/projects/techUsed/react.png",
      "/assets/projects/techUsed/tailwind.png",
      "/assets/projects/techUsed/sass.png",
    ],
    githubLink: "https://github.com/Predrag-Jandric/React-dashboard",
    previewLink: "https://peppy-profiterole-80df83.netlify.app/",
  },
  {
    name: "Project_name",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum officiis fuga magni exercitationem! Temporibus aspernatur eum ab ipsa blanditiis, excepturi recusandae dignissimos accusantium minus debitis ipsam voluptas ipsum veniam nobis!",
    projectsImageUrl: "/assets/projects/placeholder.png",
    TechUsedUrl: [
      "/assets/projects/techUsed/nextjs.png",
      "/assets/projects/techUsed/react.png",
      "/assets/projects/techUsed/tailwind.png",
      "/assets/projects/techUsed/sass.png",
    ],
    githubLink: "https://github.com/Predrag-Jandric/NodeJS-learning",
    previewLink: "https://classy-klepon-4630ee.netlify.app/",
  },
  {
    name: "Project_name",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum officiis fuga magni exercitationem! Temporibus aspernatur eum ab ipsa blanditiis, excepturi recusandae dignissimos accusantium minus debitis ipsam voluptas ipsum veniam nobis!",
    projectsImageUrl: "/assets/projects/placeholder.png",
    TechUsedUrl: [
      "/assets/projects/techUsed/nextjs.png",
      "/assets/projects/techUsed/react.png",
      "/assets/projects/techUsed/tailwind.png",
      "/assets/projects/techUsed/sass.png",
    ],
    githubLink: "https://github.com/Predrag-Jandric/React-dashboard",
    previewLink: "https://classy-klepon-4630ee.netlify.app/",
  },
];

export default function Projects() {
  return (
    <motion.div
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex items-center justify-center "
    >
      {/* <article className="bg-red-100 w-[80rem] mx-5 flex items-center justify-center"> */}
      <div className="grid grid-cols-1 text-grayText gap-20 place-items-center lg:grid-cols-2 ">
        {projectsMap.map((project, index) => (
          <motion.section
            key={index}
            variants={projectsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="max-w-[30rem] bg-pureWhite w-11/12 flex flex-col items-center justify-center gap-8 rounded-custom shadow-md overflow-hidden "
          >
            <img
              src={project.projectsImageUrl}
              alt="image missing"
              className=""
            />

            {/* Card text */}
            <article className="flex flex-col items-center justify-center gap-4 px-6 text-center">
              <h3 className="text-2xl font-semibold">
                {project.name}
              </h3>
              <p >{project.description}</p>
            </article>

            {/* Technologies used */}
            <article className="flex flex-col items-center gap-2 text-lg">
              <h4 className="font-medium">Technologies used</h4>
              <div className="flex flex-row items-center justify-center gap-2">
                {project.TechUsedUrl.map((techImageUrl, techIndex) => (
                  <img
                    key={techIndex}
                    src={techImageUrl}
                    alt="image missing"
                    className="size-14"
                  />
                ))}
              </div>
            </article>

            {/* Buttons */}
            <article className="flex items-center justify-center gap-7 mb-10">
              <Button
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-28 xs:w-40"
              >
                Code
              </Button>

              <Button
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-28 xs:w-40"
              >
                Preview
              </Button>
            </article>
          </motion.section>
        ))}
      </div>
      {/* </article> */}
    </motion.div>
  );
}
