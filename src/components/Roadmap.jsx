import leetcode from "/assets/roadmap/leetcode.png";
import projects from "/assets/roadmap/projects.png";
import job from "/assets/roadmap/job.png";
import mern from "/assets/roadmap/mern.png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import {
  generalVariants,
  roadmapVariants,
  roadmapArrowVariants,
} from "../utils/animations.js";
import { motion } from "framer-motion";

export default function Roadmap() {
  return (
    <motion.section
      className="overflow-x-auto px-6 flex flex-col py-16 items-center shadow-md bg-dark"
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="roadmap"
    >
      <div className="flex text-white flex-col md:flex-row items-center justify-center shadow-none gap-8 md:gap-5 lg:gap-8 container bg-dark px-0">
        <motion.article
          variants={roadmapVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={0.35}
          className="flex md:flex-row flex-col items-center gap-8 md:gap-5 lg:gap-8 text-center"
        >
          <div className="flex flex-col items-center justify-center gap-3 w-fit">
            <p className="text-sm font-semibold italic">Q1 2025</p>
            <img
              className="size-32 md:size-20 lg:size-32 object-contain"
              src={projects}
              alt="symbol of goal"
            />
            <p className="text-body">
              Finish 4 super <br /> group projects{" "}
            </p>
          </div>

          <motion.span
            variants={roadmapArrowVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={0.5}
          >
            <HiOutlineArrowLongRight
              size={40}
              className="md:rotate-0 rotate-90 text-white"
            />
          </motion.span>
        </motion.article>

        <motion.article
          variants={roadmapVariants}
          initial="initial"
          whileInView="animate"
          custom={0.65}
          viewport={{ once: true }}
          className="flex md:flex-row flex-col items-center gap-8 md:gap-5 lg:gap-8 text-center"
        >
          <div className="flex flex-col items-center justify-center gap-3  w-fit">
            <p className="text-sm font-semibold italic">Q2 2025</p>
            <img
              className="size-32 md:size-20 lg:size-32 object-contain"
              src={leetcode}
              alt="symbol of goal"
            />
            <p className="text-body">
              Do 200 Leet <br /> code challenges
            </p>
          </div>

          <motion.span
            variants={roadmapArrowVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={0.8}
          >
            <HiOutlineArrowLongRight
              size={40}
              className="md:rotate-0 rotate-90 text-white"
            />
          </motion.span>
        </motion.article>

        <motion.article
          variants={roadmapVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={1.05}
          className="flex md:flex-row flex-col items-center gap-8 md:gap-5 lg:gap-8 text-center"
        >
          <div className="flex flex-col items-center justify-center gap-3  w-fit">
            <p className="text-sm font-semibold italic">Q3 2025</p>
            <img
              className="size-32 md:size-20 lg:size-32 object-contain"
              src={job}
              alt="symbol of goal"
            />
            <p className="text-body w-24">
              Appy and <br /> land a job
            </p>
          </div>
          <motion.span
            variants={roadmapArrowVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1.2}
          >
            <HiOutlineArrowLongRight
              size={40}
              className="md:rotate-0 rotate-90 text-white"
            />
          </motion.span>
        </motion.article>

        <motion.article
          variants={roadmapVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={1.35}
          className="flex items-center gap-8 md:gap-5 lg:gap-8  text-center"
        >
          <div className="flex flex-col items-center justify-center gap-3 w-fit">
            <p className="text-sm font-semibold italic">2026+</p>
            <img
              className="size-32 md:size-20 lg:size-32 object-contain"
              src={mern}
              alt="symbol of goal"
            />
            <p className="text-body">
              Continue working on <br /> MERN stack skills
            </p>
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
}
