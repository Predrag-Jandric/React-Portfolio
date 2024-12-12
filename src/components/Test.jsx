function Test() {
  return (
    <div className="bg-stone-400 h-[90vh]">
      <MobileNavbar />
    </div>
  );
}

export default Test;

import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";

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

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
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
  }, [isOpen]);

  const handleToggle = () => {
    if (!clickable) return;

    setClickable(false);
    setIsOpen((prev) => !prev);

    setTimeout(() => setClickable(true), 800);
  };

  return (
    <div ref={scope}>
      <nav className="fixed h-full top-0 left-0 w-full bg-gray-800 pt-20  z-40 text-center translate-x-full transition-colors">
        <ul className="flex flex-col gap-y-4 px-8 ">
          <li className="text-white text-3xl cursor-pointer  hover:text-primary ">
            Portfolio
          </li>
          <li className="text-white text-3xl cursor-pointer hover:text-primary">
            About
          </li>
          <li className="text-white text-3xl cursor-pointer hover:text-primary">
            Contact
          </li>
          <li className="text-white text-3xl cursor-pointer hover:text-primary">
            Search
          </li>
        </ul>
      </nav>

      <MenuToggleBtn toggle={handleToggle} />
    </div>
  );
}

export const Path = (props) => (
  <path
    fill="#f1f1f1"
    strokeWidth="3"
    stroke="#f1f1f1"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggleBtn = ({ toggle }) => (
  <button
    className="absolute z-50 top-5 right-3 w-10 h-10 sm:hidden cursor-pointer"
    onClick={toggle}
  >
    <svg width="32" height="32" viewBox="0 0 23 18">
      <Path
        d="M 2 2.5 L 20 2.5"
        className="top"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
      <Path
        d="M 2 16.346 L 20 16.346"
        className="bottom"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
