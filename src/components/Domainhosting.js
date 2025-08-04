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

const Domainhosting = () => {
  return (
  
   <div>
   <Header />
    <section class="hero">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h1 class="hero-title">
             <span>Domain and Hosting</span> Services</h1>
        
          <p>Want to give design to your ideas and develop your digital reality?Get Regitered on web with us</p>
          <p>Domain name is the address of your website that allows the visitors to easily access your website on the internet 
            and web hosting is where all your data and files are stored.
             You need to have both things in place to smoothly run your website.</p>
          <a href="#" class="btn btn-primary mt-3">Get Started</a>
        </div>
        <div class="col-md-6 text-center">
          <img src="https://www.narjisinfotech.com/public/assets/images/domain-h.png"
          alt="UI/UX Illustration" class="hero-img"/>
        </div>
      </div>
    </div>
  </section>

 

  <section class="service-section">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-md-6 mb-4 mb-md-0">
          <img src="https://www.narjisinfotech.com/public/assets/images/domain-h-2.png"
          alt="Web Design" class="service-img"/>
        </div>

        <div class="col-md-6">
          <h2><span>Register Your Domain
</span></h2>
          <h5 class="mt-4 mb-3 text-muted">Take that first step of courage and register your brand on web with us.</h5>
          <p>
            Domain and hosting services are essential for making a website accessible on the internet. Domain services handle the
             registration and management of your website's unique address (domain name),
             while hosting services provide the infrastructure (servers) to store your website's files and make them accessible to users. 
          </p>
        </div>
      </div>
    </div>
  </section>
  

  <section class="services">
    <div class="service-card">
      <i class="fas fa-database"></i>
      <h3>Domain Privacy</h3>
      <p>We provide you the domain privacy and security, every time when you buy a new domain address on web, your personal...</p>
    </div>
    <div class="service-card">
      <i class="fas fa-certificate"></i>
      <h3>SSL Certificates</h3>
      <p>Nowadays, SSL certificate is a necessary security measure to take for your customers. Buy or get an SSL certificate to be secure.</p>
    </div>
    <div class="service-card">
      <i class="fas fa-server"></i>
      <h3>Linux Hosting</h3>
      <p>We offer you one of the best Linux hosting in the current business market, in comparison of Linux and Windows servers.</p>
    </div>
    <div class="service-card">
      <i class="fas fa-search"></i>
      <h3>Search your Domain</h3>
      <p>We help you search and register your perfect domain name with your choices for your brand name.</p>
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

export default Domainhosting;
