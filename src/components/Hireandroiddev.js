// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/mindwhile_log.png';
import Lottie from 'lottie-react'
import Laptop from '../animations/Laptop.json';
import Dots from '../animations/Dotsanimation.json';
import ITServices from '../animations/ITDeal.json';
import Header from './Header';
import Footer from './Footer';
import servicesstyles from './Hiredevs.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, btn, col, row , Form, Container, Row, Col } from 'react-bootstrap';

const Hireandroiddev = () => {
  return (
  
   <div>
   <Header />
   <section class="php-section relative top-[6vw]">
    <div class="php-content">
      <h1>Hire <span class="highlight">Android </span> Developers</h1>
     
      <h3>Mindwhile has gracefully proved its worth as the finest IT service</h3>
      <p>
        Mindwhile has gracefully proved its worth as the finest IT service provider, mobile app & web development company for over a decade.
        Our dedicated team of expert performers makes sure to achieve the targeted goals. If you have an idea, we will surely turn it into reality.
      </p>
      <a href="#" class="contact-btn">Contact Us →</a>
    </div>
    <div class="php-image">
      <img src="https://www.narjisinfotech.com/public/assets/images/Hire-Devloper/ios-hire-image.webp"
       alt="Developer illustration" />
    </div>
  </section>
  
 <br/><br/>

  <section class="ios-section1">
    <div class="ios-left">
      <h1>Dedicated <span class="highlight">iOS</span> developers for modern development</h1>
      <p>The term ‘iOS Developer’ refers to someone who specializes in creating software for the iOS platform and Apple’s mobile devices.</p>
      <a href="#" class="hire-btn">Hire iOS Developer →</a>
    </div>

    <div class="ios-right">
      <ul>
        <li><span class="check">✓</span> Skilled Resources</li>
        <li><span class="check">✓</span> Transparency</li>
        <li><span class="check">✓</span> Cost Effectiveness</li>
        <li><span class="check">✓</span> Seamless Communication</li>
      </ul>
    </div>
  </section>
 <section class="hiring-section">
    <div class="heading">
      <h3><span class="line"></span> Expand your Team With <span class="line"></span></h3>
      <h1>Hire <span class="ios-red">iOS</span> Developers As Per Your Need</h1>
    </div>

    <div class="card-container">

      <div class="contract-card">
        <i class="fa-solid fa-calendar-days icon"></i>
        <h3>Monthly Hiring Contract</h3>
        <p>8 hours per day<br/>160 hours total</p>
      </div>


      <div class="contract-card">
        <i class="fa-solid fa-hourglass-half icon"></i>
        <h3>Time and Materials Contract</h3>
        <p>8 hours per day<br/>160 hours total</p>
      </div>


      <div class="contract-card">
        <i class="fa-solid fa-lock icon"></i>
        <h3>Fixed Cost Contract</h3>
        <p>8 hours per day<br/>160 hours total</p>
      </div>
    </div>

    <div class="center-btn">
      <a href="#" class="cta-btn">Hire iOS Developer →</a>
    </div>
  </section>

   <section class="ios-section">
    <h2 class="section-title">iOS Service we serve</h2>
    <p class="section-subtitle">
      Our developers here at Narjis Infotech are all considered to be familiar with iOS coding standards and meticulously follow Apple's human interface strategies to the core.
    </p>

    <div class="card-container">

      <div class="ios-card">
        <div class="icon"><i class="fa-solid fa-lightbulb"></i></div>
        <h3>Well-functional</h3>
        <p>
          Hire our iOS app developers to create and emulate apps that help achieve outstanding functional designs. 
          Our experienced iOS development team outshines in building apps with amusing experience leveraging the iconic iOS platform.
        </p>
      </div>

  
      <div class="ios-card">
        <div class="icon"><i class="fa-solid fa-lightbulb"></i></div>
        <h3>Usage of latest technologies</h3>
        <p>
          Give extensions to your business ideas such as hiring our exclusive iOS developers. They are renowned iOS experts who offer top-notch solutions for all types and sizes of industries.
        </p>
      </div>

      <div class="ios-card">
        <div class="icon"><i class="fa-solid fa-lightbulb"></i></div>
        <h3>Quality outcome</h3>
        <p>
          We use other technologies, platforms or frameworks along with native iOS programming to offer nothing less than excellence. You discuss your business idea with us and we suggest the best combination to achieve innovative and quality results.
        </p>
      </div>
    </div>

    <div class="footer-title">
      <h1>HIRE iOS DEVELOPERS</h1>
    </div>
  </section>

  <section class="contact-section">

    <div class="contact-info">
      <h2>Want to collaborate with us or join us?</h2>
      <h3>Let’s make something great together.</h3>
      <div class="socials">
        <a href="#" title="Facebook">🌐</a>
        <a href="#" title="LinkedIn">💼</a>
        <a href="#" title="Instagram">📸</a>
        <a href="#" title="Twitter">🐦</a>
      </div>
     <p><strong>Email:</strong> mindwhile@gmail.com</p>
      <p><strong>Phone:</strong> +91 9489028761</p>
            <p><strong>Location:</strong> A/404, Sidhivinayak Tower, Ahmedabad, Gujarat, India</p>
    </div>
         

    <div class="contact-form">
        <h3>We are always looking for great collaborators.<br/> Lets message and make something together!
</h3>
      <form>
        <input type="text" placeholder="Your Name *" required />
        <input type="email" placeholder="Your Email *" required />
        <input type="text" placeholder="Your Phone *" required />
        <select>
          <option>How we could contact you?</option>
          <option>Email</option>
          <option>Phone</option>
        </select>
        <select>
          <option>What type of services do you need?</option>
          <option>Web Design</option>
          <option>UI/UX</option>
          <option>Development</option>
        </select>
        <textarea rows="4" placeholder="Your Message..."></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>

 
   <Footer />   
  </div>
  )
};

export default Hireandroiddev;
