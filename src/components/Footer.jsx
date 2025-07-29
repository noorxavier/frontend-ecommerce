import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Company Info */}
       <div className="about-section">
<h3>ABOUT US</h3>
<img
  src="https://erlendissolutions.com/uploads/logo/298281641905006logo1.png"
  alt="Erlendis Solutions India Logo"
  className="flex justify-center mb-6 "
  style={{ maxWidth: '100%', height: '50%' }}
/>
<div className="flex justify-center gap-6">
  <a href="#" aria-label="Facebook">
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
      alt="Facebook"
      className="w-8 h-8 hover:scale-110 transition-transform duration-300"
    />
  </a>
  <a href="#" aria-label="Twitter">
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg"
      alt="Twitter"
      className="w-8 h-8 hover:scale-110 transition-transform duration-300"
    />
  </a>
  <a href="#" aria-label="Instagram">
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
      alt="Instagram"
      className="w-8 h-8 hover:scale-110 transition-transform duration-300"
    />
  </a>
  <a href="#" aria-label="LinkedIn">
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
      alt="LinkedIn"
      className="w-8 h-8 hover:scale-110 transition-transform duration-300"
    />
  </a>
</div>
</div>


        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <span className="font-semibold">Address:</span> Ecospace Business Park, Sector V, Kolkata, West Bengal 700091
            </li>
            <li>
              <span className="font-semibold">Phone:</span> +91 8617708345 / +91 9674723042
            </li>
            <li>
              <span className="font-semibold">Email:</span> info@erlendissolutions.com
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/career" className="hover:underline">Careers</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Erlendis Solutions. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer
