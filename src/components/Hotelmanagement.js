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
import Laptop from '../animations/Hotelmanagement.json';
import Dots from '../animations/Dotsanimation.json';
import Digital from '../animations/SoftwareDropshadow.json';
import Support from '../animations/Marketing.json';
import Smart from '../animations/SoftwareDevelopment.json';
import OurTeam from '../animations/Brainstorming.json';
import Counter from "./Counter";
import Footer from './Footer';
import Team from './Team';
import Header from './Header';
import admisson from '../assets/customer.png'
import student from '../assets/hotel.png'
import staff from '../assets/admin.png'
import fee from '../assets/calendar.png'
import attendace from '../assets/immigration.png'
import exam from '../assets/grouping.png'
import onlineclass from '../assets/online-learning.png'
import reception from '../assets/reception.png'
import idcard from '../assets/id-card.png'
import invoice from '../assets/invoice.png'
import library from '../assets/library.png'
import website from '../assets/website.png'

const HotelManagement = () => {

  return (
  
  <div class="bg-black-500 p-0.5">
       <Header />
       <div class="absolute top-[8vw] right-[10vw] h-[32vw] w-[40vw]">
           <Lottie animationData={Laptop} loop={true}/>
       </div>
        <div class="absolute top-[22vw] right-[46vw] h-[5vw] w-[10vw]">
           <Lottie animationData={Dots} loop={true}/>
       </div>
            <div class="relative left-[6vw] top-[6vw] w-full md:w-2/5 p-4 bg-green">
          <h2 class="relative top-[1vw] font-serif font-bold text-xl md:text-4xl mb-5 text-gray-600">Hotel Management Software - Nesto</h2>
          <p class="font-serif">
            Hotel Management  Software, or HMS, is an electronic solution to ease and streamline the day-to-day operations of a hotel, resort, 
            guesthouse, or even homestay. It is the behind-the-scenes brain of your hospitality operation, which manages everything from booking
            rooms to checking out guests, 
            coordinating staff, billing, inventory, as well as even customer feedback.<br/><br/><br/>

            A good hotel management system consolidates all hotel operations onto a single platform, minimising manual work and opportunities for
             human error. It simplifies the work of staff in managing front desk operations, allocating rooms, processing payments,
            scheduling housekeeping, and producing financial reports. <br/><br/>
            In summary, HMS makes processes more efficient, saves time, and increases the guest experience.
             It enables hoteliers to spend more time attending to customers and less time doing paperwork and procedures.
          </p>
        </div>
  <section class="relative top-[5vw] py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-800">Hotel Management Software Features</h2>
      <p class="mt-4 text-gray-600">
        Awesome Features that makes Hotel Management Easier      </p>
    </div>

    <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-center text-gray-800">Customer App</h3>
         <p class="mt-2 text-gray-600"></p>
         <img class="motion-safe:animate-bounce animate-pulse relative top-[1vw] left-[6.5vw] h-[8vw] w-[8vw]" src={admisson} />
        <p class="mt-2 text-gray-600">
          An effective feature which makes the customer login and searching rooms easy along with hourly booking, offers and referrals.
        </p>
      </div>

      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-center text-gray-800">Hotel Partner</h3>
         <p class="mt-2 text-gray-600"></p>
         <img class="motion-safe:animate-bounce animate-pulse relative top-[1vw] left-[6.5vw] h-[8vw] w-[8vw]" src={student} />
        <p class="mt-2 text-gray-600">
         An effective feature which makes the Hotel Staff Accept/Reject booking, scan ID, auto-checkin with OTP, see payouts easy.
        </p>
      </div>

      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-center text-gray-800">Admin Panel</h3>
         <p class="mt-2 text-gray-600"></p>
         <img class="motion-safe:animate-bounce animate-pulse relative top-[1vw] left-[6.5vw] h-[8vw] w-[8vw]" src={staff} />
        <p class="mt-2 text-gray-600">
          An effective feature for Admin to set Commission settings, platform fee setup, hotel partner onboarding, refunds & penalties.
        </p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-center text-gray-800">Booking Types</h3>
         <p class="mt-2 text-gray-600"></p>
         <img class="motion-safe:animate-bounce animate-pulse relative top-[1vw] left-[6.5vw] h-[8vw] w-[8vw]" src={fee} />
        <p class="mt-2 text-gray-600">
          An effective feature which enables booking options of 3hr / 6hr / 12hr / 1 Day options.
        </p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-center text-gray-800">User Policies</h3>
         <p class="mt-2 text-gray-600"></p>
         <img class="motion-safe:animate-bounce animate-pulse relative top-[1vw] left-[6.5vw] h-[8vw] w-[8vw]" src={attendace} />
        <p class="mt-2 text-gray-600">
          An effective feature for configuring Per-person pricing, wallet refunds only, ID mandatory, platform fee non-refundable
        </p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-center text-gray-800">Staff Management</h3>
         <p class="mt-2 text-gray-600"></p>
         <img class="motion-safe:animate-bounce animate-pulse relative top-[1vw] left-[6.5vw] h-[8vw] w-[8vw]" src={exam} />
        <p class="mt-2 text-gray-600">
          An effective feature which makes the admission process easy
        </p>
      </div>
      {/* <div class="bg-white shadow-lg rounded-lg p-6">
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
      </div> */}


    </div>
  </div>
</section>

           <div className="hotelfooter">
            <Footer/> 
           </div>
           
    </div>
     

  )
};

export default HotelManagement; 