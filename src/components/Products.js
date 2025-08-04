import React, { useEffect, useState } from "react";
import Lottie from 'lottie-react'
import Laptop from '../animations/Laptop.json';
import Dots from '../animations/Dotsanimation.json';
import ITServices from '../animations/Productsmenu.json';
import hotel from '../assets/Hotel.svg';
import school from '../assets/School.svg';
import paymentint from '../assets/paymentint.svg';
import hireuidev from '../assets/hireuidev.svg';
import hireandroid from '../assets/hireandroid.svg';
import iosdev from '../assets/iosdev.svg';
import digitalmarket from '../assets/digitalmarket.svg';
import domainhosting from '../assets/domainhost.svg';
import hirephp from '../assets/hireuidev.svg';
import hireios from '../assets/hireuidev.svg';
import { Link } from 'react-router';

const Products = (props) => {
  
  const [name, setName] = useState("");
  
    // Function triggered when the form is submitted
     const OnProducts = (products) => {
      props.parentCallback(products); // Send the data to the parent using callback
    };
    return (
        // <div className="absolute top-[10vh] left-[80vw] text-black ">
           <div className="servicesdropdown absolute top-[5vw] right-[4vw] border-2 group-hover:block hover:display-block rounded-lg shadow-lg bg-white h-[25vw] w-[75.3vw] px-42 py-15 "
             onMouseLeave={() => {
                                 {OnProducts({mousein:false})}
                                }}
          
            >
            <div class="relative top-[2vw] right-[1vw] h-[10vw] w-[25vw]">
            <Lottie animationData={ITServices} loop={true}/>
            </div>

            <p class="relative top-[6vw] left-[4vw] text-lg font-serif font-bold">Best Software Products!</p>
            <p class="relative top-[6vw] left-[4vw] text-md font-serif">Products for your bussiness</p>
            <button class="relative top-[5.5vw] left-[4vw] w-52 h-13 rounded-full 
                       bg-black text-white">
            <span class="relative right-[0.3vw] top-[.4vw] text-4x1 font-bold">Request A Quote</span>
            <svg class="relative bottom-[0.7vw] left-[11vw] rtl:rotate-180 w-3.5 h-3.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
              <div class="relative left-[25vw] bottom-[16vw] h-[25vw] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>

             {/* <div class="absolute top-[0.5vw] left-[25vw] -ml-0.05 w-0.5 h-[24vw] bg-gray-300"></div> */}
            <div class="relative left-[26.5vw] bottom-[40vw] h-[4vw] rounded-lg hover:border-2 w-[22vw] hover:border-blue-600">
              <Link to="/hotel" class="flex relative top-[1vw] left-[1.5vw] px-3 py-0 text-md font-serif font-medium text-black-900"
                // onClick={() => {
                //                 {OnServices({comp:"webdev"})}
                //         }}
              
              >Nesto - Hotel management
                
               <img class="relative top-[0.1vw] right-[15.7vw] h-[1.5vw] w-[4.5vw] opacity-100" src={hotel} />
               <svg class="relative top-[0.35vw] right-[2.7vw] rtl:rotate-180 w-3.5 h-3.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="#3d62d3ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </Link> 
              </div>
              <div class="relative left-[26.5vw] bottom-[40vw] h-[4vw] rounded-lg hover:border-2 w-[22vw] hover:border-blue-600">
              <Link to="/school" class="flex relative top-[1vw] left-[1.5vw] px-3 py-0 text-md font-serif font-medium text-black-900">
              
              School ERP Software
                <img class="relative top-[0.1vw] right-[13.1vw] h-[1.5vw] w-[4.5vw] opacity-100" src={school} />
               <svg class="relative top-[0.35vw]   rtl:rotate-180 w-3.5 h-3.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="#3d62d3ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link> 
              </div>
              {/* <div class="relative left-[26.5vw] bottom-[40vw] h-[4vw] rounded-lg hover:border-2 w-[22vw] hover:border-blue-600">
              <a href="/paymentint" class="flex relative top-[1vw] left-[1.5vw] px-6 py-0 text-md font-serif font-medium text-black-900">Payment Integration
               <img class="relative top-[0.1vw] right-[13.1vw] h-[1.5vw] w-[4.5vw] opacity-100" src={paymentint} />
               <svg class="relative top-[0.35vw] left-[0.3vw] rtl:rotate-180 w-3.5 h-3.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="#3d62d3ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a> 
              </div>
              <div class="relative left-[26.5vw] bottom-[40vw] h-[4vw] rounded-lg hover:border-2 w-[22vw] hover:border-blue-600">
              <a href="/hireux" class="flex relative top-[1vw] left-[1.5vw] px-6 py-0 text-md font-serif font-medium text-black-900">Hire UI/UX Developer
               <img class="relative top-[0.1vw] right-[14vw] h-[1.5vw] w-[4.5vw] opacity-100" src={hireuidev} />
               <svg class="relative top-[0.35vw] right-[0.8vw]  rtl:rotate-180 w-3.5 h-3.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="#3d62d3ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a> 
              </div>
              <div class="relative left-[26.5vw] bottom-[40vw] h-[4vw] rounded-lg hover:border-2 w-[22vw] hover:border-blue-600">
              <a href="/hireandroiddev" class="flex relative top-[1vw] left-[1.9vw] px-3 py-0 text-md font-serif font-medium text-black-900">Hire Android Developer
              <img class="relative top-[0.1vw] right-[14.6vw] h-[1.5vw] w-[4.5vw] opacity-100" src={hireandroid} />
                <svg class="relative top-[0.35vw] right-[1.3vw]  rtl:rotate-180 w-3.5 h-3.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="#3d62d3ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a> 
              </div>
              <div class="relative left-[50vw] bottom-[60vw] h-[4vw] rounded-lg hover:border-2 w-[22vw] hover:border-blue-600">
              <a href="/iosdev" class="flex relative top-[0.8vw] left-[0.5vw] px-6 py-0 text-md font-serif font-medium text-black-900">iOS Development
               <img class="relative top-[0.01vw] right-[11.5vw] h-[1.5vw] w-[4.5vw] opacity-100" src={iosdev} />
               <svg class="relative top-[0.35vw] rtl:rotate-180 w-3.5 h-3.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="#3d62d3ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a> 
              </div>
               <div class="relative left-[50vw] bottom-[60vw] h-[4vw] rounded-lg hover:border-2 w-[22vw] hover:border-blue-600">
              <a href="/marketing" class="flex relative top-[0.8vw] left-[0.55vw] px-6 py-0 text-md font-serif font-medium text-black-900">Digital Marketing
               <img class="relative top-[0.01vw] right-[11.5vw] h-[1.5vw] w-[4.5vw] opacity-100" src={digitalmarket} />
               <svg class="relative top-[0.35vw] right-[0.2vw] rtl:rotate-180 w-3.5 h-3.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="#3d62d3ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a> 
              </div>
               <div class="relative left-[50vw] bottom-[60vw] h-[4vw] rounded-lg hover:border-2 w-[22vw] hover:border-blue-600">
              <a href="/domainhosting" class="flex relative top-[0.8vw] left-[0.55vw] px-6 py-0 text-md font-serif font-medium text-black-900">Domain & Hosting
               <img class="relative top-[0.01vw] right-[11.9vw] h-[1.5vw] w-[4.5vw] opacity-100" src={domainhosting} />
               <svg class="relative top-[0.35vw] right-[0.8vw] rtl:rotate-180 w-3.5 h-3.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="#3d62d3ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a> 
              </div>
                <div class="relative left-[50vw] bottom-[60vw] h-[4vw] rounded-lg hover:border-2 w-[22vw] hover:border-blue-600">
              <a href="/hirephp" class="flex relative top-[0.8vw] left-[0.55vw] px-6 py-0 text-md font-serif font-medium text-black-900">Hipe Php Developer
               <img class="relative top-[0.01vw] right-[12.6vw] h-[1.5vw] w-[4.5vw] opacity-100" src={hireuidev} />
               <svg class="relative top-[0.35vw] right-[1.5vw] rtl:rotate-180 w-3.5 h-3.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="#3d62d3ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a> 
              </div>
                <div class="relative left-[50vw] bottom-[60vw] h-[4vw] rounded-lg hover:border-2 w-[22vw] hover:border-blue-600">
              <a href="/hireios" class="flex relative top-[0.8vw] left-[0.55vw] px-4 py-0 text-md font-serif font-medium text-black-900">Hire iOS Developer
               <img class="relative top-[0.01vw] right-[12.4vw] h-[1.5vw] w-[4.5vw] opacity-100" src={hireuidev} />
               <svg class="relative top-[0.35vw] right-[1.2vw] rtl:rotate-180 w-3.5 h-3.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="#3d62d3ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a> 
              </div> */}
             
              {/* <div class="relative h-[4vw] top-[1vw] rounded-md   border-transparent border-2 hover:text-blue-600 w-[18vw]">
             <a href="#" class="flex relative top-[1vw] left-[1vw] px-6 py-0 text-lg font-serif font-medium text-white hover:text-blue-600">HealthCare
               <svg class='relative top-[0.2vw] right-[8vw]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
               
               <svg class="relative top-[.6vw] rtl:rotate-180 w-3.5 h-3.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a> 
              </div> */}   
         
        </div>
    );
};
export default Products;