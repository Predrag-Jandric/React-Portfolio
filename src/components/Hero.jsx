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

      <div className="pt-[110px]  flex justify-between lg:flex-row flex-col lg:text-start items-center text-center">
        <div className="font-headings lg:w-[75%] px-3 xl:w-[60%] w-full">
          <motion.h2
            initial={heroVariants.initial}
            animate={heroVariants.animate}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:text-[66px] text-[40px] font-bold whitespace-wrap text-white"
          >
            <span className="text-primary">Frontend</span> developer who builds
            apps that shine.
          </motion.h2>
          <motion.p
            initial={heroVariants.initial}
            animate={heroVariants.animate}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="py-[40px] text-lg text-neutral-200"
          >
            I’ve worked with over 15 colleagues from diverse tech backgrounds to
            build production-ready applications in a professional setting. My
            contributions and team-first mindset were crucial in delivering
            results across multiple open-source projects.
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
          opacity: [0, 1, 1], // Appear, stay, then stay
          y: [0, -20, 0], // Bounce animation
          x: "-50%", // Center horizontally
        }}
        transition={{
          opacity: {
            duration: 1, // Total duration for opacity animation
            delay: 7, // Delay before appearing
            times: [0, 0.5, 1], // Controls timing of opacity keyframes
          },
          y: {
            duration: 1.2, // Bounce duration for one cycle
            delay: 7, // Starts bouncing after X seconds
            repeat: 3, // Repeats twice (total of 3 bounces)
            repeatType: "loop", // Ensures smooth looping
            yoyo: true, // Ensures the bounce goes up and down
          },
        }}
        viewport={{ once: true }}
      >
        <SlArrowDown size={50} className="cursor-pointer" />
      </motion.a>
    </header>
  );
}
