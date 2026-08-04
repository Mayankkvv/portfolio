import { motion } from 'framer-motion'
import './Skills.css'
import RevealText from './RevealText'

const skillGroups = [
  { category: 'Languages', items: ['C++', 'JavaScript', 'Python', 'Java'] },
  { category: 'Frontend', items: ['React', 'Vite', 'Framer Motion', 'CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
  { category: 'AI', items: ['LangChain', 'LangGraph', 'CrewAI', 'Deep Learning'] },
  { category: 'Databases', items: ['MongoDB', 'MySQL'] },
  { category: 'DevOps', items: ['Git', 'Vercel', 'Render'] },
  { category: 'Tools', items: ['VS Code', 'Postman', 'Docker'] },
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title"><RevealText text="Skills" /></h2>
      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            className="skills-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <h3>{group.category}</h3>
            <div className="skills-tags">
              {group.items.map((item) => (
                <span key={item} className="skill-tag">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills