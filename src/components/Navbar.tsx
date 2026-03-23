import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-blue-500 text-white py-4">
      <ul className="flex items-center">
        <li className="mr-6"><a href="#" className="hover:text-gray-300">Home</a></li>
        <li className="mr-6"><a href="#" className="hover:text-gray-300">About</a></li>
        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  );
}