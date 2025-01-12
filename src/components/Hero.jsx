import { motion } from "framer-motion";
import { heroVariants } from "../utils/animations.js";
import Navbar from "./navbar/Navbar";
import { SlArrowDown } from "react-icons/sl";
import ThreeDObject from "./ThreeDObject";
import useScrollTo from "../utils/useScrollTo.js";

export default function Hero() {
  const scrollToSection = useScrollTo(170);
  return (
    <header className="bg-cover text-pureWhite min-h-screen bg-[url('/assets/hero/background.png')] xl:px-30 lg:px-20 px-5 lg:py-[60px] p-[40px] shadow-md relative">
      <Navbar />

      <div className="pt-[110px]  flex justify-between lg:flex-row flex-col lg:text-start items-center text-center ">
        <div className="lg:w-[75%] px-3 xl:w-[60%] w-full">
          <motion.h2
            initial={heroVariants.initial}
            animate={heroVariants.animate}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:text-[66px] font-headings text-[40px] font-bold whitespace-wrap text-white"
          >
            <span className="text-primary">Lorem</span> Lorem, ipsum dolor.{" "}
          </motion.h2>
          <motion.p
            initial={heroVariants.initial}
            animate={heroVariants.animate}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="py-[40px] text-lg text-neutral-200"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            corporis necessitatibus iusto ex impedit perferendis unde, corrupti
            aut fugit facere?{" "}
          </motion.p>
        </div>

        <ThreeDObject />
      </div>
      <motion.a
        onClick={() => scrollToSection("about")}
        rel="noopener noreferrer"
        className="absolute bottom-8 left-1/2 text-primary"
        initial={{ opacity: 0, y: -30, x: "-50%" }}
        animate={{
          opacity: [0, 1, 1], // Appear, stay, then disappear
          y: [0, -20, 0],
          x: "-50%",
        }}
        transition={{
          opacity: {
            duration: 7, // Total duration for opacity animation (fade-in + fade-out)
            delay: 3.4, // Delay before appearing
            times: [0, 0.1, 0.9, 1], // Controls timing of opacity keyframes
          },
          y: {
            duration: 1.2, // Bounce duration for one cycle
            delay: 3.4, // Starts bouncing after 3.4 seconds
            repeat: 2, // Repeats twice (total of 3 bounces)
            repeatType: "loop", // Ensures smooth looping
          },
        }}
        viewport={{ once: true }}
      >
        <SlArrowDown size={50} className="cursor-pointer" />
      </motion.a>
    </header>
  );
}
