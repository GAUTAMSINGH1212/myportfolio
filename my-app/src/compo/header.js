import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Optional: close menu on click (for mobile)
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Gautam</div>
      <button className={`menu-btn ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </button>
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          <a
            href="/"
            className={activeLink === "home" ? "active-link" : ""}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={activeLink === "about" ? "active-link" : ""}
            onClick={() => handleLinkClick("about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/topics"
            className={activeLink === "skills" ? "active-link" : ""}
            onClick={() => handleLinkClick("skills")}
          >
           Js Doc
          </a>
        </li>
       
        <li>
          <a
            href="#contact"
            className={activeLink === "contact" ? "active-link" : ""}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
