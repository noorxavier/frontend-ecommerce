import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible,setVisible]=useState(false);

   

    
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
    <a href="https://facebook.com" target="_blank" rel="noreferrer"
       className="transition duration-300 transform hover:scale-110">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook"
           className="w-6 h-6 hover:brightness-125" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noreferrer"
       className="transition duration-300 transform hover:scale-110">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter"
           className="w-6 h-6 hover:brightness-125" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noreferrer"
       className="transition duration-300 transform hover:scale-110">
      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram"
           className="w-6 h-6 hover:brightness-125" />
    </a>
  </div>
      </div>
    <div className='flex items-center justify-between py-5 font-medium mx-4 shadow transition duration-300 ease-in-out'>
        
        <Link to='/'><img src={assets.logo}  className ="w-35" alt="" /></Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

            <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p> HOME </p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
         
            <NavLink to='/Client' className='flex flex-col items-center gap-1'>
                    <p> CLIENT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/services' className='flex flex-col items-center gap-1'>
                    <p> SERVICES</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
                <NavLink to='/career' className='flex flex-col items-center gap-1'>
                    <p> CAREER</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
             <NavLink to='/management' className='flex flex-col items-center gap-1'>
                    <p> OUR MANAGEMENT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            {/* <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p> COLLECTION </p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink> */}
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p> ABOUT </p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p> CONTACT </p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

            </ul>
          

            {/* sidebar menu for small screens */ }
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                    <div className='flex flex-col text-gray-600'>
                            <div onClick={()=> setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                                    <p>Back</p>
                            </div>
                            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/client'>CLIENT</NavLink>
                            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/services'>SERVICES</NavLink>
                            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/career'>CAREER</NavLink>
                            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/management'>OUR MANAGEMENT</NavLink>
                            {/* <NavLink onClick={()=>setVisible(false)}  className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink> */}
                            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                    </div>
            </div>
    </div>
    </div>
);
};

export default Navbar
