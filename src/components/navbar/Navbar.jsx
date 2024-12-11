"use client";

import React from "react";
import Image from "next/image";

import MobileNavbar from "./MobileNavbar";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar__ul">
          <li className="navbar__ul__li">
            <a href="#" className="navbar__ul__li__a">
              Skills
            </a>
          </li>
          <li className="navbar__ul__li">
            <a href="#" className="navbar__ul__li__a">
              Projects
            </a>
          </li>
          <li className="navbar__ul__li">
            <a href="#" className="navbar__ul__li__a">
              Endorsements
            </a>
          </li>
          <li className="navbar__ul__li">
            <a href="#" className="navbar__ul__li__a">
              Questions
            </a>
          </li>
        </ul>
      </nav>

      <MobileNavbar />
    </>
  );
}

export default Navbar;
