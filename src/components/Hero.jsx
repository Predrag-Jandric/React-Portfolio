import { motion } from "framer-motion";
import { heroVariants } from "/animations.js";
import Navbar from "./navbar/Navbar";
// import img from "../../public/assets/hero/profile.png";
import Test from "./Test";

export default function Hero() {
  return (
    <header className="bg-cover text-pureWhite min-h-screen bg-[url('/assets/hero/background.png')] xl:px-30 lg:px-20 px-5 lg:py-[60px] p-[40px] shadow-md">
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

        <Test />
      </div>
    </header>
  );
}
