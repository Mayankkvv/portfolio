import { motion } from 'framer-motion'
import './About.css'
import RevealText from './RevealText'

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
    body: 'Competitive programming, system design, and building autonomous agents that can reason and act on real tasks.',
  },
  {
    title: 'Tech Philosophy',
    body: 'Ship things that work end-to-end. Understand the system underneath the framework before relying on it.',
  },
]

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title"><RevealText text="About" /></h2>
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