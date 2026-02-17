import React from 'react';
import '../css/footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* About */}
        <div className="footer-box">
          <h3>About Us</h3>
          <p>
            Cocoz is your go-to place for vibrant flavors and amazing experiences. 
            Join us to explore the best food in town!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-box">
          <h3>Contact</h3>
          <p>Kanjuvayal, Kollam, Kerala</p>
          <p>Email: </p>
          <p>Phone: </p>
        </div>

        {/* Newsletter */}
        <div className="footer-box">
          <h3>Subscribe</h3>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Cocoz. All rights reserved.
      </div>
    </footer>
  );
}
