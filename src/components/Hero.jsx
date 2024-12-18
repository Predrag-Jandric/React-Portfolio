"use client";

// animation imports
import { motion } from "framer-motion";
import { heroVariants } from "/animations.js";

import Navbar from "./navbar/Navbar";

export default function Hero() {
  return (
    <header className="relative h-screen bg-dark overflow-hidden flex items-center">
      <Navbar />
      {/* promeni padding na X asi */}
      <section className="flex flex-col px-6 sm:mx-auto sm:items-center sm:text-center">
        <motion.h1
          initial={heroVariants.initial}
          animate={heroVariants.animate}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl font-headers text-primary sm:text-5xl"
        >
          Lorem ipsum dolor sit.
        </motion.h1>
        <motion.p
          initial={heroVariants.initial}
          animate={heroVariants.animate}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-lg text-white my-6 bg-red-90 md:max-w-4xl"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit officia quam tenetur repellendus nesciunt perspiciatis. <span className="text-primary">lorem</span> Velit officia quam tenetur repellendus nesciunt perspiciatis. Velit officia quam tenetur repellendus nesciunt perspiciatis. 
        </motion.p>

        {/* <motion.a
          initial={heroVariants.initial}
          animate={heroVariants.animate}
          transition={{ duration: 0.5, delay: 0.45 }}
          href="/"
          className="btn"
        >
          Learn more
        </motion.a> */}
      </section>
    </header>
  );
}
