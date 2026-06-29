import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navItems = [
    { label: "Who We Are?", dropdown: ["About Us", "Partnership", "Midea"] },
    { label: "What We Offer?", dropdown: ["Budding Authors Contest", "School Story Book", "Word Ninjas Programs", "Storytelling Sessions", "Stories"] },
    { label: "Who Is It For?", dropdown: ["Schools", "Parents", "Kids"] },
    { label: "Stories", dropdown: ["Read kid's Stories", "By Story Books"] },
    { label: "Shop", dropdown: null },
    { label: "Gallery", dropdown: null },
    { label: "Contact Us", dropdown: null },
  ];

  return (
    <>
      {/* Global Sticky Social Buttons (Page load par right side se aayenge) */}
     <div className="social-sticky">
  <a href="#" className="social-icon facebook" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
  <a href="#" className="social-icon instagram" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
  <a href="#" className="social-icon linkedin" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
  <a href="https://wa.me/919876543210" className="social-icon whatsapp" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
</div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Stories By Children" />
          </a>
        </div>

        {/* Nav links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navItems.map((item, index) => (
            <li key={index} className="nav-item"
              onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span>{item.label} {item.dropdown && <i className="fas fa-chevron-down"></i>}</span>
              {item.dropdown && activeDropdown === index && (
                <ul className="dropdown">
                  {item.dropdown.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <button className="join-btn">Login / Sign Up</button>

        {/* Hamburger icon */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>
    </>
  );
};

export default Navbar;