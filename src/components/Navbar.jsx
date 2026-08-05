import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            MK
          </Link>

          <span className="navbar-social-divider" />

          <div className="navbar-social-links">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="navbar-social-item"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Mayankkvv"
              target="_blank"
              rel="noreferrer"
              className="navbar-social-item"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://codolio.com/profile/Mayank231"
              target="_blank"
              rel="noreferrer"
              className="navbar-social-item navbar-codolio"
              title="Codolio Profile"
            >
              <FaCode size={12} />
              <span>Codolio</span>
            </a>
          </div>
        </div>

        <div className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#timeline" onClick={closeMenu}>
            Timeline
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
