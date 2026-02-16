import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-purple-900 shadow w-full top-0 fixed z-50">
      <div className="flex justify-around items-center h-16 px-4">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold text-green-400">MyBrand</h1>
          </Link>
        </div>
        <div className="flex justify-around items-center gap-8">
          <Link to="/" className="text-purple-200 hover:text-green-400">
            Home
          </Link>
          <Link to="/features" className="text-purple-200 hover:text-green-400">
            Features
          </Link>
          <Link to="/about" className="text-purple-200 hover:text-green-400">
            About
          </Link>
          <Link to="/contact" className="text-purple-200 hover:text-green-400">
            Contact
          </Link>
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