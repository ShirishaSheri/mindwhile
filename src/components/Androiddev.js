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
import homesectionstyles from './HomeSection.css';
import servicesstyles from './Services.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, btn, col, row , Form, Container, Row, Col } from 'react-bootstrap';

const Androiddev = () => {
  return (
  
   <div>
   <Header />
   <section class="hero">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h1 class="hero-title">Android App <span>Development Company</span></h1>
          <p>Android app development companies that can help you create high-quality mobile applications tailored to your needs.</p>
          <p>
            Our UI/UX Team Has Many Years Of Experience Developing Android Apps With Marketing Techniques That Are Unique And Appealing To Users. 
            If You Wish To Improve The Android Application Design Services You Provide, You Can Rely On Our Expertise.</p>
          <a href="#" class="btn btn-primary mt-3">Get Started</a>
        </div>
        <div class="col-md-6 text-center">
          <img src="https://www.narjisinfotech.com/public/assets/images/android-2.png" alt="UI/UX Illustration" class="hero-img"/>
        </div>
      </div>
    </div>
  </section>


  <section class="service-section">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-md-6 mb-4 mb-md-0">
          <img src="https://www.narjisinfotech.com/public/assets/images/android-23.png" alt="Web Design" class="service-img"/>
        </div>
        <div class="col-md-6">
          <h2> <span>Android Application
          </span><br/> Development Services
        </h2>

          <h5 class="mt-4 mb-3 text-muted">Design and develop your digital identity on web.</h5>
          <p>
            Our UI/UX design services can help rebuild the image of your business in the digital market. 
            Combination of creativity and technology, we put on table can turn tables for your digital branding. 
            Mindwhile specializes in creating unique and high-end web development.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="tech-section">
    <h1>Android App Development Technologies</h1>
    <div class="tech-container">
      <div class="tech-card">
        <i class="fab fa-java"></i>
        <h3>Java</h3>
        <p>You write Android apps in Java using an IDE called Android Studio. Android has many features and functionalities.</p>
      </div>
      <div class="tech-card">
        <i class="fas fa-code"></i>
        <h3>Kotlin</h3>
        <p>Kotlin is best for developing Android apps, bringing modern language benefits to the Android platform.</p>
      </div>
      <div class="tech-card">
        <i class="fab fa-ionic"></i>
        <h3>Ionic</h3>
        <p>Ionic is a complete SDK for hybrid mobile development—build cross-platform apps with one codebase.</p>
      </div>
      <div class="tech-card">
        <i class="fas fa-mobile-alt"></i>
        <h3>PhoneGap</h3>
        <p>Build great apps targeting iOS, Android, and Windows with a single web technology stack.</p>
      </div>
      <div class="tech-card">
        <i class="fas fa-code-branch"></i>
        <h3>Sencha</h3>
        <p>We build our projects step by step using Angular 7+ with the latest improvements.</p>
      </div>
      <div class="tech-card">
        <i class="fas fa-bolt"></i>
        <h3>Flutter</h3>
        <p>Flutter is a modern toolkit from Google for building high-performance apps for Android and iOS.</p>
      </div>
      <div class="tech-card">
        <i class="fas fa-crosshairs"></i>
        <h3>Xamarin</h3>
        <p>Xamarin allows C# developers to build cross-platform apps with native performance for Android & iOS.</p>
      </div>
      <div class="tech-card">
        <i class="fab fa-react"></i>
        <h3>React Native</h3>
        <p>React Native is a JavaScript framework for writing native apps for iOS and Android using React.</p>
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
      <input type="text" name="name" placeholder="Your Name *" required />
      <input type="email" name="email" placeholder="Your Email *" required />
      <input type="text" name="phone" placeholder="Your Phone *" required />
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

export default Androiddev;
