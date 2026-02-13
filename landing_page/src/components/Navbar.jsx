import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-purple-900 shadow w-full top-0">
      <div className="flex justify-around items-center h-16 px-4">
        <div>
          <h1 className="text-2xl font-bold text-green-400">MyBrand</h1>
        </div>
        <div className="flex justify-around items-center gap-8">
          <a href="#home" className="text-purple-200 hover:text-green-400">
            Home
          </a>
          <a href="#features" className="text-purple-200 hover:text-green-400">
            Features
          </a>
          <a href="#about" className="text-purple-200 hover:text-green-400">
            About
          </a>
          <a href="#contact" className="text-purple-200 hover:text-green-400">
            Contact
          </a>
        </div>
        <div>
          <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;