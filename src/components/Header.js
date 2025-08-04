// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/mindwhile_log.png';
import Lottie from 'lottie-react'
import Laptop from '../animations/Laptop.json';
import Dots from '../animations/Dotsanimation.json';
import ITServices from '../animations/ITDeal.json'; 
import Services from './Sevices';
import Products from './Products';
const Header = (props) => {
const [services, setServices] = useState("");
const [products, setProducts] = useState("");

	// Function triggered when the form is submitted
	 const OnServices = (services) => {
	// 	props.parentCallback(services); // Send the data to the parent using callback
      setServices(services.mousein);
      setProducts(false);
	 };
    const OnProducts = (products) => {
	// 	props.parentCallback(services); // Send the data to the parent using callback
      setProducts(products.mousein);
      setServices(false);
	 };
  return (

        //  <div class="bg-white z-9999"> 
        //      {services == true &&
        //         <Services parentCallback={OnServices}/>
        //      }
        //       {products == true &&
        //         <Products parentCallback={OnProducts}/>
        //      }
        //     <nav class="relative top-8 sticky right-[18vw] z-500"> 
        //     <div class="absolute top-[3vw] flex justify-end  bg-[#ffffff] w-full">  
        //     <img class="relative bottom-[2.5vw] right-[38vw] h-[5vw] w-[15vw] opacity-100" src={logo} />
            
        //     <a href="/" class="relative right-[10vw] rounded-md px-6 py-0 text-lg font-serif font-medium text-grey-300 hover:text-blue-600">Home</a>
        //     <a href="about" class="relative right-[10vw] rounded-md px-6 py-0 text-lg font-serif font-medium text-grey-300 hover:text-blue-600"
        //      >About</a>
        //     <a href="products" className="relative right-[10vw] rounded-md px-6 py-0 text-lg font-serif font-large text-grey-300 hover:text-blue-600"
        //         onMouseEnter={() => {
        //                        {OnProducts({mousein:true})}
        //                }}
        //     >
        //       Products
        //       <svg class="relative bottom-[1.2vw] left-[4.2vw] w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        //           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        //       </svg>
        //       <span class="relative bottom-[3.4vw] left-[4.6vw] inline-flex h-[0.3vw] w-[.3vw] animate-ping rounded-full bg-blue-900 opacity-79"></span>
        //     </a>
        //     <a href="#" class="relative right-[10vw] rounded-md px-6 py-0 text-lg font-serif font-medium text-grey-300 hover:text-blue-600 group" 
        //      onMouseEnter={() => {
        //                        {OnServices({mousein:true})}
        //                }}
        //         >
        //     Services
        //      <svg class="relative bottom-[1.2vw] left-[4.2vw] w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        //           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        //       </svg>
        //     </a>
        //     <a href="careers" class="relative right-[10vw] rounded-md px-6 py-0 text-lg font-serif font-medium text-grey-300 hover:text-blue-600">Careers</a>
        //     <a href="contact" class="relative right-[10vw] rounded-md px-6 py-0 text-lg font-serif font-medium text-grey-300 hover:text-blue-600"

        //                 >Contact</a>
            
        //   </div>          
        //  </nav>
        //  </div>
        <div className="bg-white z-[9999]">
  {services && <Services parentCallback={OnServices} />}
  {products && <Products parentCallback={OnProducts} />}

  <nav className="sticky top-8 z-[500]">
    <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-white">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-12 w-40 object-contain" />

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="/" className="text-lg font-serif font-medium text-gray-700 hover:text-blue-600">Home</a>
        <a href="/about" className="text-lg font-serif font-medium text-gray-700 hover:text-blue-600">
          About
        </a>
        <div 
          onMouseEnter={() => OnProducts({ mousein: true })}
          className="relative group cursor-pointer"
        >
          <a href="/products" className="text-lg font-serif font-medium text-gray-700 hover:text-blue-600 flex items-center gap-1">
            Products
            <svg className="w-3 h-3" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <span className="absolute top-0 right-[-8px] inline-flex h-2 w-2 animate-ping rounded-full bg-blue-900 opacity-75"></span>
        </div>

        <div 
          onMouseEnter={() => OnServices({ mousein: true })}
          className="relative group cursor-pointer"
        >
          <a href="#" className="text-lg font-serif font-medium text-gray-700 hover:text-blue-600 flex items-center gap-1">
            Services
            <svg className="w-3 h-3" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <a href="/careers" className="text-lg font-serif font-medium text-gray-700 hover:text-blue-600">Careers</a>
        <a href="/contact" className="text-lg font-serif font-medium text-gray-700 hover:text-blue-600">Contact</a>
      </div>

      {/* Optional: Mobile Menu Button (not functional without JS toggle) */}
      <div className="md:hidden">
        <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
          {/* You can put a hamburger icon here */}
          ☰
        </button>
      </div>
    </div>
  </nav>
</div>
  )
};

export default Header;
