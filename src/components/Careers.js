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
import Laptop from '../animations/career.json';
import Dots from '../animations/Dotsanimation.json';
import Digital from '../animations/SoftwareDropshadow.json';
import Support from '../animations/Marketing.json';
import Smart from '../animations/SoftwareDevelopment.json';
import OurTeam from '../animations/Brainstorming.json';
import Counter from "./Counter";
import Footer from './Footer';
import Team from './Team';
import Header from './Header';

const Careers = () => {

  return (
  
  <div class="bg-black-500 p-0.5">
       <Header />
       <div class="absolute top-[6vw] right-[62vw] h-[18vw] w-[38vw]">
           <Lottie animationData={Laptop} loop={true}/>
       </div>
        <div class="absolute top-[7vw] right-[30vw] h-[20vw] w-[40vw]">
           <Lottie animationData={Dots} loop={true}/>
       </div>
            <div class="relative left-[52vw] top-[6vw] w-full md:w-2/5 p-4 bg-green">
          <h2 class="text-xl md:text-4xl mb-5 text-blue-400">Contact us for Opportunities</h2>
          <form class="space-y-4">
            <div>
              <input type="text" id="fullName" name="fullName" placeholder='Full Name' class="mt-1 p-4 w-full border rounded-md" />
            </div>
            <div>
              <input type="email" id="email" name="email" placeholder='Email' class="mt-1 p-4 w-full border rounded-md" />
            </div>
            <div>
              <textarea id="message" name="message" placeholder='Short Summary of your Job experience' class="mt-1 p-4 w-full border rounded-md" rows="4"></textarea>
            </div>
            <button type="submit" class="px-8 py-4 bg-blue-700 text-white hover:bg-blue-900">Submit</button>
          </form>
        </div>
  <section class="relative top-[5vw] py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-800">Join Our Team</h2>
      <p class="mt-4 text-gray-600">
        We’re looking for talented individuals to help us shape the future. Explore our current opportunities and find your perfect role.
      </p>
    </div>

    <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-gray-800">Frontend Developer</h3>
        <p class="mt-2 text-gray-600">Location: Remote</p>
        <p class="mt-2 text-gray-600">
          We're looking for a skilled frontend developer with expertise in React.js and Tailwind CSS.
        </p>
        <button class="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Apply Now
        </button>
      </div>

      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-gray-800">UI/UX Designer</h3>
        <p class="mt-2 text-gray-600">Location: New York, NY</p>
        <p class="mt-2 text-gray-600">
          Join our team as a creative UI/UX designer to build intuitive user experiences.
        </p>
        <button class="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Apply Now
        </button>
      </div>

      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-gray-800">Marketing Specialist</h3>
        <p class="mt-2 text-gray-600">Location: London, UK</p>
        <p class="mt-2 text-gray-600">
          We need a dynamic marketing specialist to manage campaigns and grow our brand.
        </p>
        <button class="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Apply Now
        </button>
      </div>
    </div>
  </div>
</section>

           <div className="contactfooter">
            <Footer/> 
           </div>
           
    </div>
     

  )
};

export default Careers; 