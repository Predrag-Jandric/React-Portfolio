import php from "../assets/roadmap/php.png";
import react from "../assets/roadmap/react.png";
import job from "../assets/roadmap/job.png";
import mern from "../assets/roadmap/mern.png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { generalVariants, roadmapVariants } from "/animations";
import { motion } from "framer-motion";

export default function Roadmap() {
    const roadmapMapData = [
      { title: "Learn PHP", image: php, time: "2 months" },
      { title: "Do React challenges & prepare", image: react, time: "3 months" },
      { title: "Apply & Land a Job", image: job, time: "4 months" },
      { title: "Learn MERN stack", image: mern, time: "1 year" },
    ];
  
    return (
      <motion.div
        className="overflow-x-auto px-6 flex flex-col items-center"
        variants={generalVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-8 bg-pureWhite p-12 w-fit">
          {roadmapMapData.map((element, index) => (
            <motion.article
              variants={roadmapVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              key={index}
              className="flex items-center gap-12 text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <p className="text-sm">{element.time}</p>
                <img
                  className="w-28 h-28 object-contain"
                  src={element.image}
                  alt={element.title}
                />
                <p className="font-semibold text-lg">{element.title}</p>
              </div>
              {index < roadmapMapData.length - 1 && (
                <HiOutlineArrowLongRight
                  size={40}
                  className="mr-4 text-gray-600"
                />
              )}
            </motion.article>
          ))}
        </div>
      </motion.div>
    );
  }