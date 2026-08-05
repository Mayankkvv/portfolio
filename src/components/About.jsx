import { motion } from 'framer-motion'
import './About.css'
import RevealText from './RevealText'
import CarAnimation from './CarAnimation'

const aboutCards = [
  {
    title: 'Education',
    body: 'B.Tech in Electronics & Communication Engineering, IIIT Tiruchirappalli (Aug 2023 – May 2027).',
  },
  {
    title: 'Current Focus',
    body: 'Full Stack MERN development, Machine Learning / Deep Learning, and Agentic AI systems built with LangChain, LangGraph, and CrewAI.',
  },
  {
    title: 'Interests',
    body: 'Data structures & algorithms, competitive programming, backend development, AI engineering, and building autonomous agents that can reason and act on real tasks.',
  },
  {
    title: 'Tech Philosophy',
    body: 'Ship things that work end-to-end. Understand the system underneath the framework before relying on it.',
  },
]

const bioText = (
  <>
    <p>
      Hi, I'm <strong className="highlight">Mayank Kumar</strong>, a Software Engineering enthusiast from <strong className="highlight">Kanpur, Uttar Pradesh</strong>, currently pursuing a <strong className="highlight">B.Tech in Electronics and Communication Engineering</strong> at <strong className="highlight">IIIT Tiruchirappalli</strong>.
    </p>
    <p>
      I enjoy building software that solves real-world problems, with a strong focus on <strong className="highlight">backend development, full-stack applications, distributed systems, artificial intelligence, and computer networks</strong>. My goal is to understand how systems work internally and build solutions that are scalable, reliable, and efficient.
    </p>
    <p>
      Over the past few years, I've dedicated myself to strengthening my fundamentals through competitive programming, hands-on projects, and continuous learning. From developing AI-powered workflow automation platforms and multithreaded networking applications to building machine learning solutions, I enjoy challenging myself with projects that push my technical skills beyond the classroom.
    </p>
    <p>
      I believe in writing clean, maintainable code, continuously improving my engineering skills, and approaching every problem with curiosity and persistence. Whether it's learning a new technology, debugging a complex issue, or designing a scalable system, I enjoy the process as much as the final result.
    </p>
    <p>
      I'm currently seeking opportunities where I can contribute, learn from experienced engineers, and grow into a software engineer capable of building impactful products at scale.
    </p>
  </>
)

function About() {
  return (
    <section id="about" className="about">
      <CarAnimation />
      <h2 className="section-title"><RevealText text="About" /></h2>

      <div className="about-bio-wrapper">
        <motion.div
          className="about-bio-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
        >
          <div className="about-bio-header">
            <span className="about-bio-badge">Overview</span>
            <span className="about-bio-scroll-hint">Hover to pause</span>
          </div>

          <div className="about-bio-scroll-container">
            <div className="about-bio-scroll-content">
              {bioText}
              {bioText}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="about-grid">
        {aboutCards.map((card, i) => (
          <motion.div
            key={card.title}
            className="about-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default About