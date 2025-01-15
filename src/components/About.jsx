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
      className="xs:px-5 px-3 flex flex-col items-center"
      id="about"
    >
      <section className="container text-grayText rounded-custom">
        <section className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <img
            src={devPhoto}
            alt="developer photo"
            className="w-80 object-cover rounded-custom"
          />

          <div className="md:w-2/3 w-full">
            <h3 className="text-headings font-medium mb-4 font-headings">
              Voluptates ipsam repudiandae excepturi
            </h3>
            <p className="text-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              voluptates ipsam repudiandae excepturi cumque, culpa magni sed
              iusto sint expedita.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              voluptates ipsam repudiandae excepturi cumque, culpa magni sed
              iusto sint expedita.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              voluptates ipsam repudiandae excepturi cumque, culpa magni sed
              iusto sint expedita.
            </p>
          </div>
        </section>

        <Button className="mx-auto mt-10 w-52 gap-3 flex">
          Download CV <RiDownload2Fill size={20} />
        </Button>
      </section>
    </motion.div>
  );
}
