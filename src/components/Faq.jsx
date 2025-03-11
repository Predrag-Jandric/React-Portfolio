import { useState } from "react";
import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import { faqMap } from "../utils/data.js";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Function to split the answer by newlines and return it as separate <p> elements
  const formatAnswer = (answer) => {
    return answer.split("\n").map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <motion.section
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="faq"
      className="mx-auto max-w-[65rem] px-4 text-dark xs:px-6"
    >
      {faqMap.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            className="mb-4 overflow-hidden rounded-custom shadow-md transition-transform ease-in-out"
            key={index}
          >
            <p
              className="flex cursor-pointer items-center justify-between bg-pureWhite px-6 py-4 text-body font-medium transition-all hover:bg-blue-50"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <button className="cursor-pointer border-none bg-transparent text-body transition-transform">
                {isOpen ? "-" : "+"}
              </button>
            </p>
            <div
              className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-full py-5 opacity-100" : "max-h-0 opacity-0"
              } border-t-2 border-neutral-200 bg-pureWhite px-5 text-body leading-relaxed`}
            >
              {formatAnswer(faq.answer)}
            </div>
          </div>
        );
      })}
    </motion.section>
  );
}
