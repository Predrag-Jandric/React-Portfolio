import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import Button from "./Button";
import devPhoto from "/assets/about/devPhoto.jpg";
import { RiDownload2Fill } from "react-icons/ri";

export default function About() {
  return (
    <motion.div
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="xs:px-5 px-3 flex mx-1 flex-col items-center"
      id="about"
    >
      <section className="container text-grayText rounded-custom">
        <section className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <img
            src={devPhoto}
            alt="developer photo"
            className="w-80 object-cover rounded-custom"
          />

          <div className="lg:w-2/3 w-full">
            <h3 className="text-headings font-medium mb-4 font-headings">
              Hi, I’m Predrag – a Frontend Developer with Big Goals
            </h3>
            <p className="text-body">
              Volunteering for a year with Chingu.io was a game-changer for me.
              It helped me refine my work ethic and gain invaluable real-world
              experience building complex applications in an Agile environment
              using Scrum practices.
              <br />
              <br />
              Work consistency, clean and scalable code, and well-written
              documentation are the cornerstones of my work. I think that great
              code doesn’t just work, it should be easy to read, maintain, and
              build upon by other members. I’ve been sharing my coding journey
              on GitHub and YouTube, documenting lessons learned.
              <br />
              <br />
              My long-term goal is to deepen my understanding of backend
              technologies, including Node.js, Express, and MongoDB. I’m excited
              to expand my skill set beyond front-end development, enabling me
              to build seamless full-stack applications and tackle more complex
              challenges.
            </p>
          </div>
        </section>

        <Button
          onClick={() => alert("Coming soon")}
          className="mx-auto mt-10 w-56 gap-3 flex"
        >
          Download CV <RiDownload2Fill size={20} />
        </Button>
      </section>
    </motion.div>
  );
}
