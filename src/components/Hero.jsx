import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import useRotatingText from "../hooks/useRotatingText";
import NetworkBackground from "../animations/NetworkBackground";
import "./Hero.css";
import RippleButton from "./RippleButton";
import RevealText from "./RevealText";

const roles = [
  "Software Engineer",
  "Backend Engineer",
  "Full Stack Developer",
  "AI Engineer",
  "ML Engineer",
  "Agentic AI Builder",
];

function Hero() {
  const currentRole = useRotatingText(roles, 2200);

  return (
    <section className="hero">
      <NetworkBackground />
      <div className="hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="hero-status-banner"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="status-dot" />
            <span>Open to Internships & Opportunities</span>
          </motion.div>

          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">
            <RevealText text="Mayank Kumar" />
          </h1>

          <motion.p
            key={currentRole}
            className="hero-role"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {currentRole}
          </motion.p>

          <div className="hero-actions">
            <RippleButton
              as="a"
              href="/resume.pdf"
              className="hero-btn hero-btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              <FaFileAlt /> Resume
            </RippleButton>
            <RippleButton
              as="a"
              href="https://github.com/Mayankkvv"
              className="hero-btn"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </RippleButton>
            <RippleButton
              as="a"
              href="#"
              className="hero-btn"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </RippleButton>
            <RippleButton
              as="a"
              href="#projects"
              className="hero-btn hero-btn-ghost"
            >
              View Projects
            </RippleButton>
          </div>
        </motion.div>

        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="hero-photo-frame">
            <img
              src="/profile-placeholder.jpg"
              alt="Mayank Kumar"
              className="hero-photo"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
