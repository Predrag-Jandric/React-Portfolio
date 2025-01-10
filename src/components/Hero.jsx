import { motion } from "framer-motion";
import { heroVariants } from "/animations.js";
import Navbar from "./navbar/Navbar";
import img from "../../public/assets/hero/profile.png";

export default function Hero() {
  return (
    <header className="bg-cover text-pureWhite min-h-screen bg-[url('../../public/assets/hero/background.png')] lg:px-[100px] lg:py-[60px] p-[40px]">
      <Navbar />

      <div className="pt-[110px] flex justify-between lg:flex-row flex-col-reverse lg:mx-[30px] lg:gap-[160px] gap-[20px] lg:text-start items-center text-center">
        <div className="lg:w-[50%] w-full">
          <motion.h2
            initial={heroVariants.initial}
            animate={heroVariants.animate}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:text-[66px] font-headings text-[40px] font-bold whitespace-wrap"
          >
            <span className="text-primary">Lorem</span> Lorem, ipsum dolor.{" "}
          </motion.h2>
          <motion.p
            initial={heroVariants.initial}
            animate={heroVariants.animate}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="py-[40px] text-[20px] text-lightGrayText"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            corporis necessitatibus iusto ex impedit perferendis unde, corrupti
            aut fugit facere?{" "}
          </motion.p>
        </div>

        {/* <div className="lg:relative">
          <img
            className="lg:absolute lg:block hidden top-0 right-0 w-[90px]"
            src={svg}
            alt=""
          /> */}
        <img src={img} alt="" />
        {/* </div> */}
      </div>
    </header>
  );
}
