import php from "../assets/roadmap/php.png";
import react from "../assets/roadmap/react.png";
import job from "../assets/roadmap/job.png";
import mern from "../assets/roadmap/mern.png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { generalVariants, roadmapVariants } from "/animations";
import { motion } from "framer-motion";

export default function Roadmap() {
  const roadmapMapData = [
    { title: "Learn PHP", image: react, time: "Q1 2025" },
    { title: "React challenges", image: react, time: "Q2 2025" },
    { title: "Apply & Land a Job", image: react, time: "Q3 2025" },
    { title: "Learn MERN stack", image: react, time: "2025+" },
  ];

  return (
    <motion.div
      className="overflow-x-auto px-6 flex flex-col items-center "
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {/* rework the map and do it without the map, do it conventional way, you cannot align things because of the arrows */}

      <div className="flex items-center gap-8 container ">
        {roadmapMapData.map((element, index) => (
          <motion.article
            variants={roadmapVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            key={index}
            className="flex items-center gap-8 bg-blue-200 text-center"
          >
            <div className="flex flex-col items-center justify-center gap-3 bg-green-300 w-fit">
              <p className="text-sm font-semibold italic">{element.time}</p>
              <img
                className="size-32 object-contain bg-red-100"
                src={element.image}
                alt={element.title}
              />
              <p className=" text-lg">{element.title}</p>
            </div>
            {index < roadmapMapData.length - 1 && (
              <HiOutlineArrowLongRight size={40} className=" text-gray-600" />
            )}
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}
