import React from "react";
import homesectionstyles from './HomeSection.css';
import logo from '../assets/mindwhile_log.png';
import Lottie from 'lottie-react'
import Laptop from '../animations/Laptop.json';
import Dots from '../animations/Dotsanimation.json';
import Software from '../animations/SoftwareDevelopment.json';
import Devskills from '../animations/developerskills.json';
import SoftwareProducts from '../animations/DigitalProducts.json';
import Career from '../animations/ReadyforCareer.json';
import Footer from './Footer';
import Header from './Header';

const HomeSection = () => {

  return (
 
  <div class="bg-black-900 p-0.5">
      <Header />
      <div class="absolute top-[5vw] left-[29vw] h-[20vw] w-[40vw]">
            <Lottie animationData={Dots} loop={true}/>
       </div>
       <div class="absolute top-[5vw] left-[50vw] h-[10vw] w-[40vw]">
           <Lottie animationData={Laptop} loop={true}/>
       </div>
       <div class="absolute top-[8vw] left-[4vw] h-[10vw] w-[20vw]">
           <Lottie animationData={Software} loop={true}/>
       </div>

        <div class="absolute top-12 left-24 right-0 px-4 py-2">            
        <div class="absolute inset-y-28 left-100 flex items-center sm:hidden"></div>

       <div class="hidden sm:ml-5 sm:block">
       </div>       
    
        </div>
        <div class="absolute top-[25vw] left-[5vw] right-0 w-[40vw]">
            <p class="text-4xl font-serif font-bold text-gray-900">
                Solutions For your Bussiness 
             </p>
        <div class="absolute top-68 w-[35vw]">
            <p class="relative top-10 text-sx text-gray-900 font-serif w-[45vw]">  
					    We develop your project based on your concept and turn it into a completed product. <br/> We listen closely to your ideas and requirements to ensure we deliver exactly what you need.  <br/> We take care of managing the whole software development process.</p>
                <button class="absolute left-[0.1vw] top-[10vw] inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span class="relative px-6 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                     Learn More
                  </span>
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
          </div>
        </div>
    
    
    <div class="absolute text-center top-[48vw] ">
     
       {/* <div class="relative right-[20vw] top-[12vw]"> */}
            <h3 class="relative left-[23vw] text-5xl text-black font-serif font-medium">
                A Place That Helps <br/> Growth of Your Bussiness
             </h3>
             <p class="relative left-[23vw] font-serif  top-10 text-5x1 text-black font-serif">
              Beginning in 2021, Mindwhile changed the way professional services are offered and delivered. <br/>We focus on building long lasting relationships and help our customers succeed over building our bottom line. <br/>Our clients have continuously ranked us a top vendor.
             </p>
             <button type="button" class="relative top-[3vw] left-[23vw] text-white bg-blue-700 hover:bg-blue-600 border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-x4 font-bold px-6 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              About us
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
             </button>
      </div> 
         {/* </div> */}

       
    <div class="absolute left-[12vw] text-center top-[74vw] ">
         <a href="#" class="animate-bounce block max-w-sm p-6 bg-white border border-blue-200 rounded-lg shadow-lg bg-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-black-800 text-blue-900">
              <svg class = "relative left-[8vw]" xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 24 24" mirror-in-rtl="true">
                <path fill="currentcolor" d="M8 6H5c-.553 0-1-.448-1-1s.447-1 1-1h3c.553 0 1 .448 1 1s-.447 1-1 1zM13 10H5c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1zM13 14H5c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1z"/>
                <path fill="currentcolor" d="M18 2v8c0 .55-.45 1-1 1s-1-.45-1-1V2.5c0-.28-.22-.5-.5-.5h-13c-.28 0-.5.22-.5.5v19c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5V21c0-.55.45-1 1-1s1 .45 1 1v1c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h14c1.1 0 2 .9 2 2z"/>
                <path fill="currentcolor" d="M23.87 11.882c.31.54.045 1.273-.595 1.643l-9.65 5.57c-.084.05-.176.086-.265.11l-2.656.66c-.37.092-.72-.035-.88-.314-.162-.278-.09-.65.17-.913l1.907-1.958c.063-.072.137-.123.214-.167.004-.01.012-.015.012-.015l9.65-5.57c.64-.37 1.408-.234 1.72.305l.374.65z"/>
             </svg>
              <h5 class="relative top-[1vw] mb-2 text-2xl font-bold tracking-tight dark:text-white">21 Projects Completed</h5>
           </a>
         <a href="#" class="animate-bounce  relative bottom-[12.5vw] left-[26vw] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg bg-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-black-800 text-blue-900">
              <svg class = "relative left-[8vw]" xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 24 24">
                  <title>support</title>
                  <rect width="24" height="24" fill="none"/>
                  <path fill="currentcolor" d="M12,2a8,8,0,0,0-8,8v1.9A2.92,2.92,0,0,0,3,14a2.88,2.88,0,0,0,1.94,2.61C6.24,19.72,8.85,22,12,22h3V20H12c-2.26,0-4.31-1.7-5.34-4.39l-.21-.55L5.86,15A1,1,0,0,1,5,14a1,1,0,0,1,.5-.86l.5-.29V11a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1v5H13.91a1.5,1.5,0,1,0-1.52,2H20a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2V10A8,8,0,0,0,12,2Z"/>
              </svg>
              <h5 class="relative top-[1vw] mb-2 text-2xl font-bold tracking-tight">1364 Hours of support</h5>
            </a>
         <a href="#" class="animate-bounce  relative bottom-[25vw] left-[52vw] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg bg-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-black-800 text-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 24 24" fill="none" 
              stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
              class="relative left-[8vw] feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <h5 class=" mb-2 text-2xl font-bold tracking-tight dark:text-white">100+ Satisfied Clients</h5>
        </a>
         <a href="#" class="animate-bounce  relative bottom-[22vw] left-[14vw] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg bg-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-black-800 hover:text-blue-900 text-blue-900">
             <svg class = "relative left-[8vw]" xmlns="http://www.w3.org/2000/svg" fill="currencolor" width="100px" height="100px" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true"><path fill="currentcolor" d="M 6.0226562,6.5875 C 6.1046875,6.29453 6.184375,5.8 6.3320313,5.8 6.5265625,5.8422 6.5570312,6.34844 6.7679687,6.65781 6.8757812,6.10703 6.8921875,4.66328 7.0984375,4.62578 c 0.2109375,-0.0164 0.4617187,1.55859 0.515625,1.81641 0.2320312,0.0961 1.1460937,0.15468 1.1460937,0.15468 0.044531,0.1711 -0.5625,0.17813 -0.9375,0.18282 C 7.7148437,7.12656 7.6960937,7.42891 7.5554687,7.43594 7.4453125,7.44094 7.3632812,6.76094 7.1453125,6.27344 L 6.925,7.80859 C 6.821875,8.11328 6.5617187,7.28125 6.4117187,6.8875 6.3343747,6.8855 4.9492187,6.85 5.2960937,6.70469 L 6.0226562,6.5875 Z M 8.59375,11.5 c 0.496875,0 0.496875,-0.75 0,-0.75 l -3.1875,0 c -0.496875,0 -0.496875,0.75 0,0.75 l 3.1875,0 z M 8.03125,13 c 0.496875,0 0.496875,-0.75 0,-0.75 l -2.0625,0 c -0.496875,0 -0.496875,0.75 0,0.75 l 2.0625,0 z M 8.8328125,9.68359 C 8.9078125,9.24063 8.9546875,8.83047 9.1117187,8.53984 9.296875,8.19531 9.4890625,7.88125 9.6742188,7.57891 10.250781,6.63203 10.75,5.81641 10.75,4.6375 10.75,2.63125 9.0671875,1 7,1 4.9328125,1 3.25,2.63125 3.25,4.6375 c 0,1.17656 0.4992187,1.99453 1.0757812,2.94141 0.1851563,0.30234 0.375,0.6164 0.5625001,0.96093 0.1570312,0.29297 0.2039062,0.69844 0.2789062,1.1461 C 5.2492185,10.17813 6.0132813,10.05391 5.93125,9.56641 5.846875,9.05781 5.8,8.6125 5.5726563,8.19297 4.8085937,6.77734 4.0234375,5.95234 4.0234375,4.6375 4.0234375,3.04609 5.359375,1.75 7,1.75 c 1.640625,0 2.9765625,1.29609 2.9765625,2.8875 0,1.31484 -0.7851563,2.13984 -1.5492187,3.55312 C 8.2,8.6125 8.153125,9.06719 8.06875,9.56406 7.989063,10.04687 8.7484375,10.18281 8.8328125,9.68359 Z"/></svg>
              <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white">15+ Smart Solutions</h5>
            
        </a>
         <a href="#" class="animate-bounce ansform  rounded-xl bg-white shadow-xl transition duration-300 hover:scale-105 relative bottom-[34.5vw] left-[40vw] w-[30vw] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg bg-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-black-800 text-blue-900">
              <svg class = "relative left-[8vw]" xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 24 24" fill="none">
                  <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 3C15.97 5.92 16.46 8.96 16.46 12" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.5 14.7C19.13 14.59 18.71 14.52 18.25 14.52C16.18 14.52 14.51 16.2 14.51 18.26C14.51 20.33 16.19 22 18.25 22C20.31 22 21.99 20.32 21.99 18.26C21.99 17.49 21.76 16.77 21.36 16.18" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.04 14.8001L18.79 13.3701" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.04 14.8L18.58 15.86" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h5 class=" mb-2 text-2xl font-bold tracking-tight dark:text-white">Global Presence</h5>             
        </a>
        </div>
        <div class="absolute top-[104vw]">
            <div class="relative top-[2vw] left-[52vw] h-[20vw] w-[40vw]">
            <Lottie animationData={Devskills} loop={true}/>
            </div> 
             <div class="relative text-center bottom-[8vw] right-[21vw] ">
            <h3 class="relative left-[23vw] text-5xl text-black font-serif font-medium">
                Best IT Technology Services <br/> you can Trust
             </h3>
             <p class="relative font-serif  left-[23vw] top-10 text-5x1 text-black font-serif">
              Beginning in 2021, Mindwhile changed the way professional services are offered and delivered. <br/>We focus on building long lasting relationships and help our customers succeed over building our bottom line. <br/>Our clients have continuously ranked us a top vendor.
             </p>
             <button type="button" class="relative top-[5vw] left-[23vw] text-white bg-blue-700 hover:bg-blue-600 border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-x4 font-bold px-6 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Services
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
             </button>
      </div> 
        </div>
         <div class="absolute top-[155vw]">
            <div class="relative top-[2.5vw] h-[40vw] w-[50vw]">
            <Lottie animationData={SoftwareProducts} loop={true}/>
            </div> 
             <div class="relative text-center bottom-[33vw] left-[25vw]">
            <h3 class="relative left-[23vw] text-5xl text-black font-serif font-medium">
                World Class Software Products <br/> you can Try
             </h3>
             <p class="relative font-serif  left-[23vw] top-10 text-5x1 text-black font-serif">
              Beginning in 2021, Mindwhile changed the way professional services are offered and delivered. <br/>We focus on building long lasting relationships and help our customers succeed over building our bottom line. <br/>Our clients have continuously ranked us a top vendor.
             </p>
             <button type="button" class="relative top-[5vw] left-[23vw] text-white bg-blue-700 hover:bg-blue-600 border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-x4 font-bold px-6 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Products
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
             </button>
      </div> 
        </div>
         <div class="absolute top-[200vw]">
            <div class="relative bottom-[7vw] left-[53vw] h-[25vw] w-[35vw]">
            <Lottie animationData={Career} loop={true}/>
            </div> 
             <div class="relative text-center bottom-[24vw] right-[21vw]">
            <h3 class="relative left-[23vw] text-5xl text-black font-serif font-medium">
                Best Career Oppurtunities <br/> For Your Growth
             </h3>
             <p class="relative left-[23vw] font-serif  top-10 text-5x1 text-black font-serif">
              Beginning in 2021, Mindwhile changed the way professional services are offered and delivered. <br/>We focus on building long lasting relationships and help our customers succeed over building our bottom line. <br/>Our clients have continuously ranked us a top vendor.
             </p>
             <button type="button" class="relative top-[5vw] left-[23vw] text-white bg-blue-700 hover:bg-blue-600 border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-x4 font-bold px-6 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Careers
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
             </button>
      </div> 
        </div>
        <div className="homefooter">
                   <Footer/> 
        </div>
    </div>
           

  )
};

export default HomeSection;
