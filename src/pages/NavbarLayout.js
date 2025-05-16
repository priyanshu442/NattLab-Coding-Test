import React from "react";
import { Link } from "react-router-dom";

const NavbarLayout = () => {
  return (
    <div className="flex flex-col  scroll-smooth">
    
      <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
        <nav className="container mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-3">
             
            <div className="w-8 h-8 bg-white text-gray-900 font-bold flex items-center justify-center rounded-full">
              N
            </div>
            <span className="text-2xl font-semibold">NattLabs</span>
          </div>
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            <li>
              <Link
                to="/counter"
                className="hover:text-indigo-300 transition-colors duration-200"
              >
                Counter App
              </Link>
            </li>
            <li>
              <Link
                to="/todolist"
                className="hover:text-indigo-300 transition-colors duration-200"
              >
                Todo List
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-indigo-300 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/background"
                className="hover:text-indigo-300 transition-colors duration-200"
              >
                Background
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      
    </div>
  );
};

export default NavbarLayout;


