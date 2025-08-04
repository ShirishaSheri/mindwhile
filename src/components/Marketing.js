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
import servicestyles from './Services.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, btn, col, row , Form, Container, Row, Col } from 'react-bootstrap';

const Marketing = () => {
  return (
  
   <div>
   <Header />
   <section class="hero">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h1 class="hero-title">Digital Marketing
             <span>Company in Chennai, India</span></h1>
        
          <p>We do everything it takes to set your mark on Digi World.</p>
          <p>Web UX Design refers to the term User Experience Design, while UI Design stands for User Interface Design. Means Web UI/UX development is about using graphical elements appropriately to the demographics of its target audience.</p>
          <a href="#" class="btn btn-primary mt-3">Get Started</a>
        </div>
        <div class="col-md-6 text-center">
          <img src="https://www.narjisinfotech.com/public/assets/images/seo.png"
          alt="UI/UX Illustration" class="hero-img"/>
        </div>
      </div>
    </div>
  </section>

  

  <section class="service-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 mb-4 mb-md-0">
          <img src="https://www.narjisinfotech.com/public/assets/images/php-d-2.png"
          alt="Web Design" class="service-img"/>
        </div>

        <div class="col-md-6">
          <h2> <span>Our Online</span><br/>Mindwhile Marketing Services</h2>
          <h5 class="mt-4 mb-3 text-muted">Design and develop your digital identity on web.</h5>
          <p>
At a latest level, digital marketing refers to advertising delivered through digital channels such as search engines, websites, social media, email, and mobile apps. While this term covers a wide range of marketing activities, all of which are not universally agreed upon,our online advertising agency will focus on the most common types below.

1. Search Engine Marketing & PPC

2. Search Engine Optimization (SEO)

3. Social Media Marketing (SMM)

4. Email Marketing

5. Content Marketing
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="gallery-section">
  <div class="container">
    <div class="row">

      <div class="col-md-4 gallery-col">
        <img src="https://img.lovepik.com/photo/20230421/medium/lovepik-two-employees-working-in-the-office-photo-image_352126408.jpg" alt="Team Meeting" class="gallery-img"/>
      </div>


      <div class="col-md-4 gallery-col">
        <img src="https://img.freepik.com/premium-photo/face-business-woman-with-arms-crossed-smile-career-with-teamwork-meeting-planning-portrait-person-employee-with-cooperation-staff-professional-with-brainstorming-workplace_590464-291664.jpg" alt="Freelancer" class="gallery-img"/>
      </div>


      <div class="col-md-4 gallery-col">
        <img src="https://websitedemos.net/co-working-space-02/wp-content/uploads/sites/65/2020/06/gallery1-free-img.jpg" alt="Coffee" class="gallery-img"/>
      </div>


      <div class="col-md-4 gallery-col">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/004/259/971/small_2x/smiling-while-holding-the-notepad-portrait-of-young-girl-stands-in-the-office-with-employees-at-background-photo.jpg" alt="Businessman" class="gallery-img"/>
      </div>


      <div class="col-md-4 gallery-col">
        <img src="https://img.freepik.com/premium-photo/office-employee-workspace-with-laptop-table-ar-c-v_839793-60449.jpg" alt="Discussion" class="gallery-img"/>
      </div>


      <div class="col-md-4 gallery-col">
        <img src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=600&q=80" alt="Tablet with chart" class="gallery-img"/>
      </div>
    </div>
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

export default Marketing;
