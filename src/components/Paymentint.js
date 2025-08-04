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
import servicestyles from './Services.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, btn, col, row , Form, Container, Row, Col } from 'react-bootstrap';

const Paymentint = () => {
  return (
  
   <div>
   <Header />
<section class="hero">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h1 class="hero-title">Payment gateway
             <span>integration services</span></h1>
        
          <p>Want to give design to your ideas and develop your digital reality?</p>
          <p>
            A payment gateway is a digital tool that online businesses use to process and authorise digital customer payments, such as debit or credit cards, digital wallets and electronic bank transfers. It's the online equivalent of a physical card-reading device. Payment gateways are intermediary services that check,
             approve or reject electronic transactions securely on behalf of the online business via the internet.
            </p>
          <a href="#" class="btn btn-primary mt-3">Get Started</a>
        </div>
        <div class="col-md-6 text-center">
          <img src="https://www.narjisinfotech.com/public/assets/images/pay-i.png"
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
          <h2>
             <span>Make Transactions
             </span><br/>With Ease</h2>
          <h5 class="mt-4 mb-3 text-muted">Design and develop your digital identity on web.</h5>
          <p>
Combination of creativity and technology, we put on table can turn tables for your digital branding.
 Mindwhile specializes in creating unique and high-end web development
          </p>
        </div>
      </div>
    </div>
  </section>

<section class="payment-section">
    <h1>Payment Gateway Integration</h1>
    <div class="payment-grid">
      <div class="payment-card">
        <i class="fas fa-wallet"></i>
        <h3>PhonePe</h3>
        <p>
          PhonePe is a mobile payment platform using which you can transfer money using UPI, recharge phone numbers, pay utility bills, etc.

        </p>
      </div>
      <div class="payment-card">
        <i class="fas fa-money-check-alt"></i>
        <h3>Paytm</h3>
        <p>
          Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm UPI or Directly from your Bank Account.
           Plus, send & receive money from anyone.
        </p>
      </div>
      <div class="payment-card">
        <i class="fab fa-paypal"></i>
        <h3>Paypal</h3>

        <p>
         Access your purchase history and payment details anytime, anywhere. Link a new credit or debit card.
          Withdraw your funds. All within a single account.
        </p>
      </div>
      <div class="payment-card">
        <i class="fas fa-credit-card"></i>
        <h3>PayUMoney</h3>
        <p>PayUMoney is a cost-effective payment gateway provider in India. Ideal for small businesses with affordable fees.</p>
      </div>
      <div class="payment-card">
        <i class="fas fa-university"></i>
        <h3>Razorpay</h3>
        <p>Razorpay is a clean and modern gateway offering seamless payment solutions to online merchants in India.</p>
      </div>
      <div class="payment-card">
        <i class="fas fa-strikethrough"></i>
        <h3>Stripe</h3>
        <p>Accept payments online, in person, and globally with Stripe — built for businesses of all sizes and industries.</p>
      </div>
      <div class="payment-card">
        <i class="fas fa-indian-rupee-sign"></i>
        <h3>Pay9</h3>
        <p>Pay9 is a simple and powerful gateway provider for end-to-end payment automation, especially for India-based solutions.</p>
      </div>
      <div class="payment-card">
        <i class="fas fa-coins"></i>
        <h3>Cashfree</h3>
        <p>Cashfree is a popular Indian payment gateway offering UPI, cards, Paytm, and net banking support with API-friendly options.</p>
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

export default Paymentint;
