// import React from "react";
// import homesectionstyles from './HomeSection.css';
// import Lottie from 'lottie-react'
// import Laptop from '../animations/contact.json';
// import Dots from '../animations/Dotsanimation.json';
 import location from '../assets/MapPin.svg';
 import phone from '../assets/PhoneCall.svg';
 import email from '../assets/Mail.svg';
// import Footer from './Footer';
// import Header from './Header';
import React from "react";
import homesectionstyles from './HomeSection.css';
import Lottie from 'lottie-react'
import Laptop from '../animations/contact.json';
import Dots from '../animations/Dotsanimation.json';
import Digital from '../animations/SoftwareDropshadow.json';
import Support from '../animations/Marketing.json';
import Smart from '../animations/SoftwareDevelopment.json';
import OurTeam from '../animations/Brainstorming.json';
import Counter from "./Counter";
import Footer from './Footer';
import Team from './Team';
import Header from './Header';
const Contact = () => {

  return (
  
  <div class="bg-black-500 p-0.5">
       <Header />
       <div class="absolute top-[12vw] right-[50vw] h-[30vw] w-[50vw]">
           <Lottie animationData={Laptop} loop={true}/>
       </div>
        <div class="absolute top-[7vw] right-[30vw] h-[20vw] w-[40vw]">
           <Lottie animationData={Dots} loop={true}/>
       </div>

        <div class="absolute top-12 left-24 right-0 px-4 py-2">            
        <div class="absolute inset-y-28 left-100 flex items-center sm:hidden"></div>

       <div class="hidden sm:ml-5 sm:block">
       </div>       
    
        </div>
        <div class="absolute top-[50vw] left-[12vw] right-0 w-[40vw]">
            <p class="text-4xl font-serif font-bold text-gray-900">
                {/* <span class="text-blue-400">Our Locations</span>  */}
             </p>
            
            <div class="absolute top-[3vw] w-[35vw]">
            <img class="relative top-[1vw] right-[7vw] h-[3vw] w-[9vw] opacity-100 bg-red" src={location} />               
            <p class="relative bottom-[2vw] text-sx text-gray-900 font-serif w-[45vw]">  
              The Hive L3 VR Chennai, Anna Nagar West, Anna Nagar, <br/> Chennai, Tamil Nadu-600040</p>
            
          </div>
           <div class="absolute top-[8vw] w-[35vw]">
            <img class="relative top-[1vw] right-[7vw] h-[3vw] w-[9vw] opacity-100" src={location} />               
            <p class="relative bottom-[2vw] text-sx text-gray-900 font-serif w-[45vw]">  
              6th and 7th Floors, EA Chambers Tower II, Whites Road,<br/>  49/50L, 5th St, Royapettah, Chennai, Tamil Nadu-600014</p>

          </div>
           <div class="absolute top-[13vw] w-[35vw]">
            <img class="relative top-[1vw] right-[7vw] h-[3vw] w-[9vw] opacity-100" src={location} />               
            <p class="relative bottom-[2vw] text-sx text-gray-900 font-serif w-[45vw]">  
              WestEnd-one, 169/1, near WESTEND MALL, Wireless Colony, Aundh,<br/> Pune, Maharashtra-411007</p>
             

          </div>
           <div class="absolute top-[20vw] right-[5vw] w-[35vw]">
            <img class="relative top-[1vw] right-[7vw] h-[3vw] w-[9vw] opacity-100" src={phone} />               
            <p class="relative bottom-[2vw] text-2xl text-gray-900 font-serif w-[45vw]">  
              +91-1234567890</p>

              
             

          </div>
          <div class="absolute top-[20vw] left-[19vw] w-[35vw]">
            <img class="relative top-[1vw] right-[7vw] h-[3vw] w-[9vw] opacity-100" src={email} />               
            <p class="relative bottom-[2vw] text-2xl text-gray-900 font-serif w-[45vw]">  
              info@mindwhile.com</p>
              </div>
        </div>
        <div>
        <div class="relative top-[9vw] left-[19vw] flex flex-wrap justify-center h-[10vw] items-center  p-5 pl-[6%] pt-[9%]">
        <div class="relative bottom-[4vw] w-full md:w-2/5 p-4 bg-black">
          <h2 class="text-xl md:text-4xl mb-5 text-blue-400">GET IN TOUCH!</h2>
          <form class="space-y-4">
            <div>
              <input type="text" id="fullName" name="fullName" placeholder='Full Name' class="mt-1 p-4 w-full border rounded-md" />
            </div>
            <div>
              <input type="email" id="email" name="email" placeholder='Email' class="mt-1 p-4 w-full border rounded-md" />
            </div>
            <div>
              <textarea id="message" name="message" placeholder='Message' class="mt-1 p-4 w-full border rounded-md" rows="4"></textarea>
            </div>
            <button type="submit" class="px-8 py-4 bg-blue-700 text-white hover:bg-blue-900">Submit</button>
          </form>
        </div>
        
      </div>

       <div class="relative top-[35vw] left-[47vw] w-full md:w-1/2 p-4 flex justify-center">
          <div class="rounded-full overflow-hidden w-[35rem] h-[35rem]">
            <iframe
              class="w-[35rem] h-[35rem]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407063!2d-74.25986568785095!3d40.697670063849574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUxLjYiTiA3NMKwMTUnMzUuNyJX!5e0!3m2!1sen!2sus!4v1652901957916"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>


        </div>
           <div className="contactfooter">
            <Footer/> 
           </div>
           
    </div>
     

  )
};

export default Contact;
