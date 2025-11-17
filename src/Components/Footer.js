import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Us */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Jobswala is your go-to platform for finding the best jobs and internships across multiple industries. We help connect talent with opportunities.
          </p>
        </div>

        {/* Jobswala Links */}
        <div className="footer-section">
          <h3>Jobswala</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/register/candidate">Register</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: support@jobswala.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Address: Lahore, Pakistan</p>
        </div>

        {/* Follow Us */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><span>🌐</span> Website</a>
            <a href="#"><span>📘</span> Facebook</a>
            <a href="#"><span>🐦</span> Twitter</a>
            <a href="#"><span>📸</span> Instagram</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Jobswala. All rights reserved.</p>
      </div>
    </footer>
  );
}