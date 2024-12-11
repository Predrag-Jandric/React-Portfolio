"use client";

// animation imports
import { motion } from "framer-motion";
import { heroVariants } from "/animations.js";

import Navbar from "./navbar/Navbar";

export default function Hero() {
  return (
    <header className="relative h-screen bg-dark overflow-hidden flex items-center">
      <Navbar />
      <section className="w-11/20 ml-32 z-10 flex flex-col sm:w-11/12 sm:mx-auto sm:items-center sm:text-center">
        <motion.h1
          initial={heroVariants.initial}
          animate={heroVariants.animate}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl font-headers text-primary sm:text-3xl"
        >
          Hi, my name is Predrag
        </motion.h1>
        <motion.p
          initial={heroVariants.initial}
          animate={heroVariants.animate}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-lg text-white my-6 sm:text-base"
        >
          Let&apos;s make the internet interesting! I am eager to fulfill my
          potential as <span className="hero__span">lorem</span> and create
          outstanding websites that deliver an exceptional user experience.
        </motion.p>

        <motion.a
          initial={heroVariants.initial}
          animate={heroVariants.animate}
          transition={{ duration: 0.5, delay: 0.45 }}
          href="/"
          className="btn"
        >
          Learn more
        </motion.a>
      </section>
    </header>
  );
}
