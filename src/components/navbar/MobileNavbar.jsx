"use client";

import React, { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { MenuToggleBtn } from "./MenuToggleBtn";

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

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [animate, isOpen]);

  return scope;
}

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickable, setClickable] = useState(true);
  const scope = useMenuAnimation(isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("blur-background");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("blur-background");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (clickable) {
      setClickable(false); // Disable button temporarily
      setIsOpen(!isOpen);

      setTimeout(() => {
        setClickable(true);
      }, 1000);
    }
  };

  return (
    <div ref={scope}>
      <nav className="mobile__navbar">
        <ul className="mobile__navbar__ul">
          <li className="mobile__navbar__ul__li">Portfolio</li>
          <li className="mobile__navbar__ul__li">About</li>
          <li className="mobile__navbar__ul__li">Contact</li>
          <li className="mobile__navbar__ul__li">Search</li>
        </ul>
      </nav>

      <MenuToggleBtn toggle={handleToggle} />
    </div>
  );
}

export default MobileNavbar;
