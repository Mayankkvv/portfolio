import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'
import useRotatingText from '../hooks/useRotatingText'
import NetworkBackground from '../animations/NetworkBackground'
import '../components/Hero.css'

const roles = [
  'Software Engineer',
  'Backend Engineer',
  'Full Stack Developer',
  'AI Engineer',
  'ML Engineer',
  'Agentic AI Builder',
  'System Design Enthusiast',
]

function Hero() {
  const currentRole = useRotatingText(roles, 2200)

  return (
    <section className="hero">
      <NetworkBackground />
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Mayank Kumar</h1>

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
          <a href="/resume.pdf" className="hero-btn hero-btn-primary" target="_blank" rel="noreferrer">
            <FaFileAlt /> Resume
          </a>
          <a href="https://github.com/Mayankkvv" className="hero-btn" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="#" className="hero-btn" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="#projects" className="hero-btn hero-btn-ghost">
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero