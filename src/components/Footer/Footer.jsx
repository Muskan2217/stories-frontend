import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Footer */}
      <div className="footer-top">

        {/* Left — Logo + Info */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="Stories By Children" />
          </div>
          <p className="footer-desc">
            India's leading platform for young writers and published child authors. Where every child becomes an author.
          </p>
          <ul className="footer-contact">
            <li><i className="fas fa-envelope"></i> hello@storiesbychildren.in</li>
            <li><i className="fas fa-phone"></i> +91 98765 43210</li>
            <li><i className="fas fa-map-marker-alt"></i> Mumbai · Bengaluru · Delhi</li>
          </ul>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Who We Are</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Partnerships</a></li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>What We Offer</h4>
          <ul>
            <li><a href="#">Budding Authors Contest</a></li>
            <li><a href="#">School Story Book</a></li>
            <li><a href="#">Word Ninjas Programs</a></li>
            <li><a href="#">Storytelling Sessions</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>For</h4>
          <ul>
            <li><a href="#">Schools</a></li>
            <li><a href="#">Parents</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Educators</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Stories</h4>
          <ul>
            <li><a href="#">Read Stories</a></li>
            <li><a href="#">Buy Books</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2026 Stories By Children. All rights reserved.</p>
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;