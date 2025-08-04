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
import Laptop from '../animations/SchoolERP.json';
import Dots from '../animations/Dotsanimation.json';
import Digital from '../animations/SoftwareDropshadow.json';
import Support from '../animations/Marketing.json';
import Smart from '../animations/SoftwareDevelopment.json';
import OurTeam from '../animations/Brainstorming.json';
import Counter from "./Counter";
import Footer from './Footer';
import Team from './Team';
import Header from './Header';
import admisson from '../assets/student.png'
import student from '../assets/students.png'
import staff from '../assets/grouping.png'
import fee from '../assets/money.png'
import attendace from '../assets/immigration.png'
import exam from '../assets/exam.png'
import onlineclass from '../assets/online-learning.png'
import reception from '../assets/reception.png'
import idcard from '../assets/id-card.png'
import invoice from '../assets/invoice.png'
import library from '../assets/library.png'
import website from '../assets/website.png'

const SchoolERP = () => {

  return (
  
  <div class="bg-black-500 p-0.5">
       <Header />
       <div class="absolute top-[9vw] right-[12vw] h-[28vw] w-[34vw]">
           <Lottie animationData={Laptop} loop={true}/>
       </div>
        <div class="absolute top-[22vw] right-[46vw] h-[5vw] w-[10vw]">
           <Lottie animationData={Dots} loop={true}/>
       </div>
            <div class="relative left-[6vw] top-[6vw] w-full md:w-2/5 p-4 bg-green">
          <h2 class="relative top-[1vw] font-serif font-bold text-xl md:text-4xl mb-5 text-gray-600">School Management Software</h2>
          <p class="font-serif">
            School management software (SMS) is a comprehensive system designed to streamline the administrative, academic, and
             financial management of schools. It integrates various processes to improve efficiency, accuracy, and 
             communication within an educational institution.<br/><br/><br/>

            In this ever-changing environment, keeping a competitive edge means being able to anticipate and respond quickly to changing business conditions.  In this application, we talk about of Admission, Fees, HR & Payroll, Transport, Examination, Inventory, Accounts, Library, Infirmary, Shop Reception, Hostel, Class teacher, time table, Attendance, Message etc. modules with enhanced reporting system. This cost effective software is created in such a manner that at almost all possible places, you have the liberty to play with records as per your need, and can create master records as per your requirement and use them accordingly. We aim to carve a position in the forefront, and it is our continuing goal to gain the trust of our clients. Our Motto is to serve the purpose of our clients with perfection.
          </p>
        </div>
  <section class="relative top-[5vw] py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-800">School Management Software Features</h2>
      <p class="mt-4 text-gray-600">
        Awesome Features that makes School Management Easier      </p>
    </div>

    <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-center text-gray-800">Admission Management</h3>
         <p class="mt-2 text-gray-600"></p>
         <img class="motion-safe:animate-bounce animate-pulse relative top-[1vw] left-[6vw] h-[8vw] w-[8vw]" src={admisson} />
        <p class="mt-2 text-gray-600">
          An effective feature which makes the admission process easy
        </p>
      </div>

      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-center text-gray-800">Student Management</h3>
         <p class="mt-2 text-gray-600"></p>
         <img class="motion-safe:animate-bounce animate-pulse relative top-[1vw] left-[6vw] h-[8vw] w-[8vw]" src={student} />
        <p class="mt-2 text-gray-600">
         An effective feature which makes the admission process easy
        </p>
      </div>

      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-center text-gray-800">Staff Management</h3>
         <p class="mt-2 text-gray-600"></p>
         <img class="motion-safe:animate-bounce animate-pulse relative top-[1vw] left-[6vw] h-[8vw] w-[8vw]" src={staff} />
        <p class="mt-2 text-gray-600">
          An effective feature which makes the admission process easy
        </p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-center text-gray-800">Fee Management</h3>
         <p class="mt-2 text-gray-600"></p>
         <img class="motion-safe:animate-bounce animate-pulse relative top-[1vw] left-[6vw] h-[8vw] w-[8vw]" src={fee} />
        <p class="mt-2 text-gray-600">
          An effective feature which makes the admission process easy
        </p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-center text-gray-800">Smart Attendance Management</h3>
         <p class="mt-2 text-gray-600"></p>
         <img class="motion-safe:animate-bounce animate-pulse relative top-[1vw] left-[6vw] h-[8vw] w-[8vw]" src={attendace} />
        <p class="mt-2 text-gray-600">
          An effective feature which makes the admission process easy
        </p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-center text-gray-800">Exam & Result Management</h3>
         <p class="mt-2 text-gray-600"></p>
         <img class="motion-safe:animate-bounce animate-pulse relative top-[1vw] left-[6vw] h-[8vw] w-[8vw]" src={exam} />
        <p class="mt-2 text-gray-600">
          An effective feature which makes the admission process easy
        </p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-center text-gray-800">Online Class Management</h3>
         <p class="mt-2 text-gray-600"></p>
         <img class="motion-safe:animate-bounce animate-pulse relative top-[1vw] left-[6vw] h-[8vw] w-[8vw]" src={onlineclass} />
        <p class="mt-2 text-gray-600">
          An effective feature makes the admission process easy
        </p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-center text-gray-800">Reception Management</h3>
         <p class="mt-2 text-gray-600"></p>
         <img class="motion-safe:animate-bounce animate-pulse relative top-[1vw] left-[6vw] h-[8vw] w-[8vw]" src={reception} />
        <p class="mt-2 text-gray-600">
          An effective feature which makes the admission process easy
        </p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-center text-gray-800">ID Card Management</h3>
         <p class="mt-2 text-gray-600"></p>
         <img class="motion-safe:animate-bounce animate-pulse relative top-[1vw] left-[6vw] h-[8vw] w-[8vw]" src={idcard} />
        <p class="mt-2 text-gray-600">
          An effective feature which makes the admission process easy
        </p>
      </div>

 <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-center text-gray-800">Invoice Management</h3>
         <p class="mt-2 text-gray-600"></p>
         <img class="motion-safe:animate-bounce animate-pulse relative top-[1vw] left-[6vw] h-[8vw] w-[8vw]" src={invoice} />
        <p class="mt-2 text-gray-600">
          An effective feature which makes the admission process easy
        </p>
      </div>

      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-center text-gray-800">Library Management</h3>
         <p class="mt-2 text-gray-600"></p>
         <img class="motion-safe:animate-bounce animate-pulse relative top-[1vw] left-[6vw] h-[8vw] w-[8vw]" src={library} />
        <p class="mt-2 text-gray-600">
          An effective feature which makes the admission process easy
        </p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-center text-gray-800">Website Management</h3>
         <p class="mt-2 text-gray-600"></p>
         <img class="motion-safe:animate-bounce animate-pulse relative top-[1vw] left-[6vw] h-[8vw] w-[8vw]" src={website} />
        <p class="mt-2 text-gray-600">
          An effective feature which makes the admission process easy
        </p>
      </div>


    </div>
  </div>
</section>

           <div className="schoolfooter">
            <Footer/> 
           </div>
           
    </div>
     

  )
};

export default SchoolERP; 