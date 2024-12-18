// animation imports
import { motion } from "framer-motion";
import { projectsVariants, generalVariants } from "/animations";

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
    githubLink: "./",
    previewLink: "./",
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
    githubLink: "./",
    previewLink: "./",
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
    githubLink: "./",
    previewLink: "./", // You can set this to null or an appropriate value
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
    githubLink: "./",
    previewLink: "./",
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
    >
      {/* <article className="bg-red-100 w-[80rem] mx-5 flex items-center justify-center"> */}
      <div className="grid grid-cols-1 gap-20 place-items-center lg:grid-cols-2 ">
        {projectsMap.map((project, index) => (
          <motion.section
            key={index}
            variants={projectsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="max-w-[30rem] bg-pureWhite w-11/12 flex flex-col items-center justify-center gap-8 rounded-lg shadow-md overflow-hidden "
          >
            <img
              src={project.projectsImageUrl}
              alt="image missing"
              className=""
            />

            {/* Card text */}
            <article className="flex flex-col items-center justify-center gap-4 px-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800">
                {project.name}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </article>

            {/* Technologies used */}
            <article className="flex flex-col items-center gap-2 text-lg">
              <h4 className="text-gray-800 font-medium">Technologies used</h4>
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
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-28 xs:w-40"
              >
                Code
              </a>

              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-28 xs:w-40"
              >
                Preview
              </a>
            </article>
          </motion.section>
        ))}
      </div>
      {/* </article> */}
    </motion.div>
  );
}
