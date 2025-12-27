import React from 'react';
import { FaUser, FaFolderOpen, FaBlog, FaEnvelope } from 'react-icons/fa';

const NavTab: React.FC = () => {
  return (
    <nav className="flex justify-around gap-4 items-center px-4 py-1 bg-black rounded-[15px] ring-1 ring-white">
      <a href="#about" className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
        <FaUser size={20} color="white" />
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
          About
        </div>
      </a>
      <a href="#project" className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
        <FaFolderOpen size={20} color="white" />
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
          Project
        </div>
      </a>
      <a href="#blog" className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
        <FaBlog size={20} color="white" />
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
          Blog
        </div>
      </a>
      <a href="#contact" className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
        <FaEnvelope size={20} color="white" />
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
          Contact
        </div>
      </a>
    </nav>
  );
}

export default NavTab;
