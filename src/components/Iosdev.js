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

const Iosdev = () => {
  return ( 
  
   <div>
   <Header />
    <section class="hero">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h1 class="hero-title">iPhone App
             <span>Development Company</span></h1>
        
          <p>Want to give design to your ideas and develop your digital reality?</p>
          <p>It is easier to add dynamicity to your business with next-gen iOS app development, and being one
             of the best iPhone app development companies in India, we hold the expertise in the same. Leveraging what we have can help you develop an impactful, consistent,
             and engaging app for your domain, thus ensuring your market reach and brand awareness.

          </p>
          <a href="#" class="btn btn-primary mt-3">Get Started</a>
        </div>
        <div class="col-md-6 text-center">
          <img src="https://www.narjisinfotech.com/public/assets/images/php-d.png"
          alt="UI/UX Illustration" class="hero-img" />
        </div>
      </div>
    </div>
  </section>


  <section class="service-section">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-md-6 mb-4 mb-md-0">
          <img src="https://www.narjisinfotech.com/public/assets/images/php-d-2.png"
          alt="Web Design" class="service-img" />
        </div>

        <div class="col-md-6">
          <h2>iOS App<span>Development</span><br/><span>Company in India</span></h2>
                  <p>
              iOS application development is the process of making mobile applications for Apple hardware, 
              including iPhone, iPad and iPod Touch. The software is written in the Swift programming language 
              or Objective-C and then deployed to the App Store for users to download.

  </p>
        </div>
      </div>
    </div>
  </section>

<section class="tech-section">
  <div class="tech-grid">

    <div class="tech-card">
      <i class="fab fa-php"></i>
      <h4>PHP</h4>
      <p>Whether we are building web solutions for business or just a blog, we must know how to work on web with PHP.</p>
    </div>

    <div class="tech-card">
      <i class="fas fa-fire"></i>
      <h4>CodeIgniter</h4>
      <p>Choosing CodeIgniter development framework can be the smartest decision of any firm for digitalization.</p>
    </div>

    <div class="tech-card">
      <i class="fab fa-angular"></i>
      <h4>Angular</h4>
      <p>Angular is used to build UI with latest features and provides ease of development for dynamic projects.</p>
    </div>

    <div class="tech-card">
      <i class="fab fa-react"></i>
      <h4>React</h4>
      <p>React makes it painless to construct dynamic and interactive UI/UX web development.</p>
    </div>

    <div class="tech-card">
      <i class="fab fa-joomla"></i>
      <h4>Joomla</h4>
      <p>Joomla offers thousands of extensions and templates for your custom website requirements.</p>
    </div>

    <div class="tech-card">
      <i class="fab fa-wordpress"></i>
      <h4>WordPress</h4>
      <p>WordPress is the platform for simple, quick and efficient content management for any user.</p>
    </div>

    <div class="tech-card">
      <i class="fas fa-shopping-cart"></i>
      <h4>Magento</h4>
      <p>Magento offers customizable ecommerce solutions with powerful tools to help you grow quickly.</p>
    </div>

    <div class="tech-card">
      <i class="fab fa-drupal"></i>
      <h4>Drupal</h4>
      <p>Drupal enables users to build highly customized websites and content systems easily and flexibly.</p>
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

export default Iosdev;
