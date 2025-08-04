import React from "react";
import homesectionstyles from './HomeSection.css';
import Lottie from 'lottie-react'
import Laptop from '../animations/BusinessDealSuccess.json';
import Dots from '../animations/Dotsanimation.json';
import Digital from '../animations/SoftwareDropshadow.json';
import Support from '../animations/Marketing.json';
import Smart from '../animations/SoftwareDevelopment.json';
import OurTeam from '../animations/Brainstorming.json';
import Counter from "./Counter";
import Footer from './Footer';
import Team from './Team';
import Header from './Header';
const About = () => {

  return (
  
  <div class="bg-black-900 p-0.5">
             <Header />
       <div class="absolute top-[4vw] left-[0.5vw] h-[15vw] w-[45vw]">
           <Lottie animationData={Laptop} loop={true}/>
            <div className="relative bottom-[6vw] left-[12.5vw] numbers">
               <Counter number={140} title="Satisfied Clients" />
               <span class='relative bottom-[3vw] left-[7vw] text-4xl font-bold text-blue-400'>+ Satisfied Clients</span>
               <div class="relative bottom-[8vw] right-[5vw] h-[4vw] w-[8vw]">
            <Lottie animationData={Dots} loop={true}/>
            </div>
          </div>
       </div>


        <div class="absolute top-12 left-24 right-0 px-4 py-2">            
        <div class="absolute inset-y-28 left-100 flex items-center sm:hidden"></div>

       <div class="hidden sm:ml-5 sm:block">
       </div>       
    
        </div>
        <div class="absolute top-[16vw] left-[50vw] right-0 w-[40vw]">
            <p class="text-4xl font-serif font-bold text-gray-900">
                About <span class="text-blue-400">MindWhile IT Solutions</span> 
             </p>
             <p class="text-md font-bold font-serif text-black">
                <br/>We Execute Our ideas From The Start to Finish
             </p>
        <div class="absolute top-68 w-[35vw]">
            <p class="relative top-10 text-sx text-gray-900 font-serif w-[45vw]">  
              Beginning in 2021, Mindwhile changed the way professional services are offered. We focus on building long lasting relationships and help our customers succeed over building our bottom line. Our clients have continuously ranked us a top vendor.
            </p>
             <p class="relative top-10 text-sx text-gray-900 font-serif w-[45vw]">  
              <br/>We develop your project based on your concept and turn it into a completed product. We listen closely to your ideas and requirements to ensure we deliver exactly what you need. We are always willing to provide any consulting services, should you need them. After giving us your specifications, budget and time restrictions, you can lean back and relax. We take care of managing the whole software development process.
            </p>

          </div>
        </div>

        <div class="relative top-[50vw] left-[8vw] h-[10vw] w-[20vw]">
           <Lottie animationData={Digital} loop={true}/>
            <div className="relative bottom-[vw] left-[0.5vw] numbers">
               <Counter number={21} title="Projects Completed" />
               <span class='relative bottom-[3vw] left-[4vw] text-sm font-bold text-blue-400'>+ Projects Completed</span>
               <div class="relative bottom-[8vw] right-[5vw] h-[4vw] w-[8vw]">
            <Lottie animationData={Dots} loop={true}/>
            </div>
          </div>
          </div>
          <div class="relative top-[39vw] left-[42vw] h-[8vw] w-[16vw]">
           <Lottie animationData={Support} loop={true}/>
            <div className="relative bottom-[2.5vw] left-[1vw] numbers">
               <Counter number={1364} title="Projects Completed" />
               <span class='relative bottom-[3vw] left-[9vw] text-sm font-bold text-blue-400'>+ Hours of Support</span>
               <div class="relative bottom-[8vw] right-[5vw] h-[4vw] w-[8vw]">
            <Lottie animationData={Dots} loop={true}/>
            </div>
          </div>
          </div>
          <div class="relative top-[31vw] left-[76vw] h-[8vw] w-[16vw]">
           <Lottie animationData={Smart} loop={true}/>
            <div className="relative bottom-[2.5vw] left-[4.5vw] numbers">
               <Counter number={15} title="Projects Completed" />
               <span class='relative bottom-[3vw] left-[4vw] text-sm font-bold text-blue-400'>+ Smart Solution</span>
               <div class="relative bottom-[8vw] right-[5vw] h-[4vw] w-[8vw]">
            <Lottie animationData={Dots} loop={true}/>
            </div>
          </div>
          </div>
          <div>
            {/* <div class="relative top-[45vw] h-[25vw] w-[50vw]">
           <Lottie animationData={OurTeam} loop={true}/>
           
           
          </div> */}

          </div>
          <Team class='relative top-[5vw]'/>
          <div className='aboutfooter'>
           <Footer /> 
          </div>
    </div>
     

  )
};

export default About;
