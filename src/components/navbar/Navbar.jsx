import MobileNavbar from "./MobileNavbar";

const navLinks = [
  { href: "#", label: "Skills" },
  { href: "#", label: "Projects" },
  { href: "#", label: "Endorsements" },
  { href: "#", label: "Questions" },
];

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-center h-[10vh] px-32 w-full absolute top-0 left-0 right-0 md:px-12">
        <ul className="hidden sm:flex items-center justify-center gap-0 transition ease-in-out duration-200 bg-stone-700 ">
          {navLinks.map((link, index) => (
            <li key={index} className="relative flex w-full z-10 group">
              <a
                href={link.href}
                className="text-white text-lg py-2 px-5 cursor-pointer transition ease-in-out duration-200 relative group-hover:before:scale-100"
              >
                {link.label}
              </a>
              <span className="absolute top-full left-[10%] w-[80%] h-[5%] bg-primary scale-0 z-[-1] transition ease-in-out duration-300 group-hover:scale-100"></span>
            </li>
          ))}
        </ul>
      </nav>

      <MobileNavbar />
    </>
  );
}

export default Navbar;
