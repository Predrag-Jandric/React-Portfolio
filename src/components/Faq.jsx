import { useState } from "react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqMap = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "How does useState work?",
      answer:
        "The useState hook lets you add state to functional components. It returns an array with two values: the current state and a function to update it.",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX stands for JavaScript XML. It allows you to write HTML-like syntax directly in your JavaScript code.",
    },
  ];

  return (
    <section className="mx-auto max-w-[62rem] text-gray-800  xs:px-5 px-3">
      {faqMap.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            className="mb-4 overflow-hidden rounded-custom bg-gray-100 shadow-md transition-transform  ease-in-out"
            key={index}
          >
            <div
              className="flex items-center justify-between bg-blue-500 px-5 py-4 text-white font-medium text-lg cursor-pointer transition-all  hover:bg-blue-600"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <button className="text-2xl bg-transparent border-none cursor-pointer transition-transform ">
                {isOpen ? "-" : "+"}
              </button>
            </div>
            <div
              className={`${
                isOpen ? "max-h-[200px] opacity-100 py-5" : "max-h-0 opacity-0"
              } bg-white px-5 text-base leading-relaxed transition-all duration-500 ease-in-out`}
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </section>
  );
}
