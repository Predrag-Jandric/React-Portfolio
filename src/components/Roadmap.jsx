import php from "/assets/roadmap/php.png";
import react from "/assets/roadmap/react.png";
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
      <div className="flex text-white items-center justify-center shadow-none gap-8 container bg-dark">
        <motion.article
          variants={roadmapVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={0.5}
          className="flex items-center gap-8 text-center "
        >
          <div className="flex flex-col items-center justify-center gap-3  w-fit">
            <p className="text-sm font-semibold italic">Q1 2025</p>
            <img
              className="size-32 object-contain "
              src={php}
              alt="symbol of goal"
            />
            <p className="text-body">Learn PHP</p>
          </div>

          <motion.span
            variants={roadmapArrowVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={0.5}
          >
            <HiOutlineArrowLongRight size={40} className=" text-white" />
          </motion.span>
        </motion.article>

        <motion.article
          variants={roadmapVariants}
          initial="initial"
          whileInView="animate"
          custom={1}
          viewport={{ once: true }}
          className="flex items-center gap-8  text-center"
        >
          <div className="flex flex-col items-center justify-center gap-3  w-fit">
            <p className="text-sm font-semibold italic">Q2 2025</p>
            <img
              className="size-32 object-contain "
              src={react}
              alt="symbol of goal"
            />
            <p className="text-body">Perfect React</p>
          </div>

          <motion.span
            variants={roadmapArrowVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1}
          >
            <HiOutlineArrowLongRight size={40} className=" text-white" />
          </motion.span>
        </motion.article>

        <motion.article
          variants={roadmapVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={1.5}
          className="flex items-center gap-8  text-center"
        >
          <div className="flex flex-col items-center justify-center gap-3  w-fit">
            <p className="text-sm font-semibold italic">Q3 2025</p>
            <img
              className="size-32 object-contain "
              src={job}
              alt="symbol of goal"
            />
            <p className="text-body">Land a job</p>
          </div>
          <motion.span
            variants={roadmapArrowVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1.5}
          >
            <HiOutlineArrowLongRight size={40} className=" text-white" />
          </motion.span>
        </motion.article>

        <motion.article
          variants={roadmapVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={2}
          className="flex items-center gap-8  text-center"
        >
          <div className="flex flex-col items-center justify-center gap-3  w-fit">
            <p className="text-sm font-semibold italic">2026+</p>
            <img
              className="size-32 object-contain "
              src={mern}
              alt="symbol of goal"
            />
            <p className="text-body">MERN stack</p>
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
}
