import { motion } from "framer-motion";
import { generalVariants } from "/animations.js";
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
      className="xs:px-5 px-3 flex flex-col items-center "
    >
      <section className="container text-grayText rounded-custom">
        <div className="max-w-4xl mx-auto">
          <section className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={devPhoto}
              alt="image missing"
              className="size-48 rounded-full object-cover"
            />

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Progress-oriented Front End web developer
              </h3>
              <p className="text-lg">
                Through three years of dedicated learning via courses, personal
                projects, and guidance, I&apos;ve developed a strong grasp of
                programming concepts. To solidify my understanding, I also
                create for my own benefit. As I continuously work towards
                becoming a better developer, I&apos;m excited to collaborate
                with like-minded professionals.
              </p>
            </div>
          </section>

          <Button className="mx-auto mt-10 w-56 gap-3 flex">
            Download CV <RiDownload2Fill size={20} />
          </Button>
        </div>
      </section>
    </motion.div>
  );
}
