import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import Button from "./Button";
// import devPhoto from "/assets/about/devPhoto.jpg";
import { RiDownload2Fill } from "react-icons/ri";

export default function About() {
  return (
    <motion.div
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mx-1 flex flex-col items-center px-3 xs:px-5"
      id="about"
    >
      <section className="container rounded-custom text-grayText transition-all hover:shadow-lg">
        <section className="flex flex-col">
          {/* <img
            src={devPhoto}
            alt="developer photo"
            className="w-80 object-cover rounded-custom"
          /> */}

          {/* <div className="lg:w-2/3 w-full"> */}
          <h3 className="mb-4 font-headings text-headings font-medium">
            Hi, I&apos;m Predrag...
          </h3>
          <p className="text-body">
            Volunteering for one year at Chingu.io open source changed
            everything. It helped me improve my work ethic and it gave me a lot
            of real world experience building complex apps in an Agile
            setting, using Scrum practices.
            <br />
            <br />
            What matters most in my work is consistency, clean code, and good
            documentation. Good code should not only work but also be easy for
            other people to read, fix, and add to. I&apos;ve been posting about my
            coding journey on GitHub and YouTube, where I write about what I&apos;ve
            learned.
            <br />
            <br />
            In the long term, I want to learn more about backend technologies
            like Node.js, Express, and MongoDB. I&apos;m excited to learn more than
            just front-end development so I can build full-stack applications
            that work smoothly and take on harder problems.
          </p>
          {/* </div> */}
        </section>

        <a
          href="/assets/about/Predrag_Jandric_FrontendDeveloper_Resume.pdf"
          download="Predrag_Jandric_FrontendDeveloper_Resume.pdf"
        >
          <Button className="mx-auto mt-10 flex w-56 gap-3">
            Download CV <RiDownload2Fill size={20} />
          </Button>
        </a>
      </section>
    </motion.div>
  );
}
