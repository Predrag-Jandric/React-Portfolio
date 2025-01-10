import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import useScrollTo from "../../useScrollTo";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const navLinks = [
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "roadmap", label: "Roadmap" },
  { href: "endorsements", label: "Endorsements" },
  { href: "faq", label: "Faq" },
];

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.4 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(100%)" }, { at: "-0.1" }],
        ];

    // Button animations are independent
    const buttonAnimations = [
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { ease: "easeOut", duration: 0.1 },
      ],
      [
        "path.middle",
        { opacity: isOpen ? 0 : 1 },
        { ease: "easeOut", duration: 0.1 },
      ],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { ease: "easeOut", duration: 0.1 },
      ],
    ];

    // Animate the button and menu separately
    animate([...buttonAnimations]);
    animate([...menuAnimations]);
  }, [animate, isOpen]);

  return scope;
}

export default function MobileNavbar({ isOpen, setIsOpen }) {
  const scrollToSection = useScrollTo(170);
  const [clickable, setClickable] = useState(true);
  const scope = useMenuAnimation(isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    if (isOpen) {
      document.body.style.overflow = "hidden";
      // document.body.classList.add("blur-background");
    } else {
      document.body.style.overflow = "auto";
      // document.body.classList.remove("blur-background");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, setIsOpen]);

  const handleToggle = () => {
    if (!clickable) return;
    setClickable(false);
    setIsOpen((prev) => !prev);
    setTimeout(() => setClickable(true), 800);
  };

  return (
    <div ref={scope}>
      <nav className="fixed h-full top-0 left-0 w-full bg-gray-800 pt-20 z-40 text-center translate-x-full transition-colors">
        <ul className="flex flex-col gap-y-6 px-8 relative">
          <motion.div
            className="absolute right-[5%] -top-[16%] cursor-pointer"
            onClick={handleToggle}
            initial={{ scale: 1, opacity: 1 }}
            animate={
              isOpen
                ? { scale: 1, opacity: 1, rotate: 0 }
                : { scale: 0.7, opacity: 0, rotate: 90 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <IoCloseOutline className="size-12 hover:text-primary transition-colors" />
          </motion.div>
          {navLinks.map((link, index) => (
            <li key={index} className="relative flex w-full z-10 group">
              <a
                href={`#${link.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                  setIsOpen(false);
                }}
                className="text-pureWhite text-3xl w-full py-2 px-5 cursor-pointer transition ease-in-out duration-200 relative group-hover:before:scale-100 hover:text-primary "
              >
                {link.label}
              </a>
              <span className="absolute top-full left-[10%] w-[80%] h-[7%] bg-primary scale-0 z-[-1] transition ease-in-out duration-300 group-hover:scale-50"></span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
