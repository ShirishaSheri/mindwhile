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

const Webdev = () => {
  return (
  
   <div>
   <Header />
    <section class="hero">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h1 class="hero-title">UI/UX <span>Design Company</span></h1>
          <p>Want to give design to your ideas and develop your digital reality?</p>
          <p>UX Design refers to Human-centered design approach and deep user empathy ,research ,Iterative,text-driven process.High-quality
        scalable design systems.Cross-functional collaboration with dev teams.
          </p>
          <a href="#" class="btn btn-primary mt-3">Get Started</a>
        </div>
        <div class="col-md-6 text-center">
          <img src="https://www.narjisinfotech.com/public/assets/images/uiux-headerbg-01.png" alt="UI/UX Illustration" class="hero-img"/>
        </div>
      </div>
    </div>
  </section>
<section class="service-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 mb-4 mb-md-0">
          <img src="https://www.narjisinfotech.com/public/assets/images/uiux-headerbg-02.png" alt="Web Design" class="service-img"/>
        </div>
        <div class="col-md-6">
          <h2>Our Core <span>Web Design</span><br/><span>Services</span></h2>
          <h5 class="mt-4 mb-3 text-muted">Design and develop your digital identity on web.</h5>
          <p>
            Web Design enchances usability and accessibility,increases user engagement and retention and brings UX to life ensures fast,dynamic user
            interactions.Enchances performance and essential for web apps,login systems and content management.
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
      <p>Hypertext Preprocessor widely-used,open-source server-side scripting language
        designed for web development
      </p>
    </div>

    <div class="tech-card">
      <i class="fas fa-fire"></i>
      <h4>CodeIgniter</h4>
      <p>CodeIgniter is an open-source PHP framework used to build dynamic web applications quickly.It follows the MVC(model-view-controller)
        architecture and emphasizes speed ,simplicity and performance.
      </p>
    </div>

    <div class="tech-card">
      <i class="fab fa-angular"></i>
      <h4>Angular</h4>
      <p>Angular is a popular ,open-source web applications framework developed by Google.
      </p>
    </div>

    <div class="tech-card">
      <i class="fab fa-react"></i>
      <h4>React</h4>
      <p>React updates parts of the UI that actually changed-making it very fast.
      
      </p>
    </div>

    <div class="tech-card">
      <i class="fab fa-joomla"></i>
      <h4>Joomla</h4>
      <p>Joomla is a free and open-source content management system(CMS) written in PHP.
      </p>
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
      <p>Drupal is a free and open-source content management framework designed for building websites and web applications. 
        It is highly flexible, scalable, and customizable, making it suitable for a wide range of use cases.
      </p>
    </div>

  </div>
</section>

<section className="contact-section">
  <div className="contact-info">
    <h2>Want to collaborate with us or join us?</h2>
    <h3>Let’s make something great together.</h3>
    <div className="socials">
      <a href="#" title="Facebook">🌐</a>
      <a href="#" title="LinkedIn">💼</a>
      <a href="#" title="Instagram">📸</a>
      <a href="#" title="Twitter">🐦</a>
    </div>
    <p><strong>Email:</strong> mindwhile@gmail.com</p>
    <p><strong>Phone:</strong> +91 9489028761</p>
    <p><strong>Location:</strong> A/404, Sidhivinayak Tower, Ahmedabad, Gujarat, India</p>
  </div>

  <div className="contact-form">
    <h3>
      We are always looking for great collaborators.<br /> Let's message and make something together!
    </h3>
    <form>
      <input type="text" name="name" placeholder="Your Name *" required />
      <input type="email" name="email" placeholder="Your Email *" required />
      <input type="text" name="phone" placeholder="Your Phone *" required />
      <select name="contactMethod">
        <option>How we could contact you?</option>
        <option>Email</option>
        <option>Phone</option>
      </select>
      <select name="serviceType">
        <option>What type of services do you need?</option>
        <option>Web Design</option>
        <option>UI/UX</option>
        <option>Development</option>
      </select>
      <textarea rows="4" name="message" placeholder="Your Message..."></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</section>

   <Footer />   
  </div>
  )
};

export default Webdev;
