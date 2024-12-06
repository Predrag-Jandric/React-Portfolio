// animation imports
import { motion } from "framer-motion";
import { projectsVariants, generalVariants } from "/animations";

// data for map method
const projectsMap = [
  {
    name: "Valve Corp. Clone",
    description:
      "I was inspired by this ValveCorp webpage, to recreate it mobile first. The end result is a faithful clone of the original webpage which I made with HTML, JS and styled with Sass.",
    projectsImageUrl: "src/assets/projects/card-valve.jpeg",
    TechUsedUrl: [
      "src/assets/projects/techUsed/nextjs.png",
      "src/assets/projects/techUsed/react.png",
      "src/assets/projects/techUsed/tailwind.png",
      "src/assets/projects/techUsed/sass.png",
    ],
    githubLink: "https://github.com/Predrag-Jandric/SASS-valve-clone",
    previewLink: "https://valve-clone.netlify.app/",
  },
  {
    name: "React online store",
    description:
      "Ecommerce simulation project that uses modern React features such as Advanced state management, mapping data from API, Routing, reusable components and more.",
    projectsImageUrl: "src/assets/projects/card-react.png",
    TechUsedUrl: [
      "src/assets/projects/techUsed/nextjs.png",
      "src/assets/projects/techUsed/react.png",
      "src/assets/projects/techUsed/tailwind.png",
      "src/assets/projects/techUsed/sass.png",
    ],
    githubLink:
      "https://github.com/Predrag-Jandric/React-online-store-exercise",
    previewLink: "https://peppy-khapse-f13bb3.netlify.app/",
  },
  {
    name: "Portfolio",
    description:
      "A showcase of my skills and experience as a developer. It took months of dedication to create and design. React version is coming soon. dasdasdasdasdasd asd asda  asd asdasd",
    projectsImageUrl: "src/assets/projects/card-portfolio.jpeg",
    TechUsedUrl: [
      "src/assets/projects/techUsed/nextjs.png",
      "src/assets/projects/techUsed/react.png",
      "src/assets/projects/techUsed/tailwind.png",
      "src/assets/projects/techUsed/sass.png",
    ],
    githubLink: "https://github.com/Predrag-Jandric/Portfolio",
    previewLink: "javascript:void(0)", // You can set this to null or an appropriate value
  },
  {
    name: "Bootstrap webpage",
    description:
      "This project was an opportunity to put my design and coding skills to the test. I focused on creating a clean, visually appealing layout in Bootstrap with UI/UX rules in mind.",
    projectsImageUrl: "src/assets/projects/card-bootstrap.jpeg",
    TechUsedUrl: [
      "src/assets/projects/techUsed/nextjs.png",
      "src/assets/projects/techUsed/react.png",
      "src/assets/projects/techUsed/tailwind.png",
      "src/assets/projects/techUsed/sass.png",
    ],
    githubLink: "https://github.com/Predrag-Jandric/Bootstrap-climate-webpage",
    previewLink: "https://bootstrap-climate-webpage-page.netlify.app/",
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
      <article className=" w-[80rem] mx-5 flex items-center justify-center">
        <div className="grid grid-cols-1 gap-20  lg:grid-cols-2 ">
          {projectsMap.map((project, index) => (
            <motion.section
              key={index}
              variants={projectsVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              className="bg-pureWhite w-[30rem]   flex flex-col items-center justify-center gap-8 rounded-lg shadow-md overflow-hidden "
            >
              <img
                src={project.projectsImageUrl}
                alt="image missing"
                className="w-56 h-56"
              />

              {/* Card text */}
              <article className="flex flex-col items-center justify-center gap-4 px-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
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
                      className="w-[4rem] h-[4rem]"
                    />
                  ))}
                </div>
              </article>

              {/* Buttons */}
              <article className="flex items-center justify-center gap-7 mb-10  sm:gap-6">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Code
                </a>

                <a
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Preview
                </a>
              </article>
            </motion.section>
          ))}
        </div>
      </article>
    </motion.div>
  );
}
