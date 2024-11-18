'use client';
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-orange-300 z-10 py-4">
      <div className="container mx-auto flex justify-between items-center px-8">
        <div className="text-xl font-extrabold text-transparent">MyPortfolio</div>

        <ul className="hidden md:flex gap-10 text-lg font-bold text-gray-700">
          <li className="hover:text-white">
            <a href="#hero">HOME</a>
          </li>
          <li className="hover:text-white">
            <a href="#about">ABOUT</a>
          </li>
          <li className="hover:text-white">
            <a href="#project">PROJECT</a>
          </li>
          <li className="hover:text-white">
            <a href="#skills">SKILLS</a>
          </li>
          <li className="hover:text-white">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <span className="text-orange-500">
            <AiOutlineMenu size={30} />
          </span>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg p-4 absolute top-16 w-full z-10">
          <ul className="flex flex-col gap-4 text-lg font-bold text-orange-500">
            <li>
              <a href="#hero" onClick={toggleMenu}>HOME</a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>ABOUT</a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>PROJECTS</a>
            </li>
            <li>
              <a href="#skills" onClick={toggleMenu}>SKILLS</a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>CONTACT</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
