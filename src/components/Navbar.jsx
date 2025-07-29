import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {/* 🔷 Top Contact Bar */}
      <div className="bg-white border-b px-6 py-2 flex justify-between items-center text-sm text-gray-700">
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-1 text-cyan-500">
            📞 <span className="text-black">+91 8617708345</span>
          </span>
          <span className="flex items-center gap-1 text-cyan-500">
            📧 <a href="mailto:info@erlendissolutions.com" className="text-black">info@erlendissolutions.com</a>
          </span>
        </div>
        <div className="flex gap-3">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="transition duration-300 transform hover:scale-110">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-8 h-auto object-contain" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="transition duration-300 transform hover:scale-110">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-8 h-auto object-contain" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition duration-300 transform hover:scale-110">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-8 h-auto object-contain" />
          </a>
        </div>
      </div>

      {/* 🔷 Main Navbar */}
      <div className="flex items-center justify-between py-5 font-medium mx-4 shadow transition duration-300 ease-in-out">
        <Link to="/"><img src={assets.logo} className="w-35" alt="Logo" /></Link>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1"><p>HOME</p></NavLink>
          <NavLink to="/client" className="flex flex-col items-center gap-1"><p>CLIENT</p></NavLink>
          <NavLink to="/services" className="flex flex-col items-center gap-1"><p>SERVICES</p></NavLink>
          <NavLink to="/career" className="flex flex-col items-center gap-1"><p>CAREER</p></NavLink>
          <NavLink to="/management" className="flex flex-col items-center gap-1"><p>OUR MANAGEMENT</p></NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1"><p>ABOUT</p></NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1"><p>CONTACT</p></NavLink>
        </ul>

        {/* 👉 Hamburger Icon (mobile only) */}
        <div className="sm:hidden">
          <button onClick={() => setVisible(true)} className="p-2 focus:outline-none">
            <img src="https://static.thenounproject.com/png/2292434-200.png" alt="menu" className="h-6" />
          </button>
        </div>
      </div>

      {/* 🔶 Overlay (backdrop) */}
      {visible && (
        <div onClick={() => setVisible(false)} className="fixed inset-0 bg-black bg-opacity-30 z-40 sm:hidden"></div>
      )}

      {/* 🔶 Sidebar menu for small screens */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-[300px] bg-white shadow transition-transform duration-300 z-50 ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className="h-4 rotate-180" src="https://www.pinclipart.com/picdir/big/544-5440422_back-arrow-icon-transparent-png-clipart-free-download.png" alt="back" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/">HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/client">CLIENT</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/services">SERVICES</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/career">CAREER</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/management">OUR MANAGEMENT</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
