import MobileNavbar from "./MobileNavbar";
import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { navLinks } from "../../utils/data";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      const topPosition = element.offsetTop - 170;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, null, `#${href}`);
    }
  };

  return (
    <>
      <nav className="absolute left-0 right-0 top-0 flex h-[10vh] w-full items-center justify-center px-32 pt-3 md:px-12">
        <ul className="relative hidden items-center justify-center gap-0 transition duration-200 ease-in-out sm:flex">
          {navLinks.map((link, index) => (
            <li key={index} className="group relative z-10 flex w-full">
              <a
                rel="noopener noreferrer"
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative cursor-pointer px-5 py-2 text-xl text-white transition duration-200 ease-in-out group-hover:before:scale-100"
              >
                {link.label}
              </a>
              <span className="absolute left-[10%] top-full z-[-1] h-[5%] w-[80%] scale-0 bg-primary transition duration-300 ease-in-out group-hover:scale-100"></span>
            </li>
          ))}
        </ul>
        <CgMenu
          className="absolute right-[7%] top-[30%] size-10 cursor-pointer transition-colors hover:text-primary sm:hidden"
          onClick={() => setIsOpen(true)}
        />
      </nav>

      <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Navbar;
