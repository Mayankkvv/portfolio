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

const marqueeSkillsRow1 = [
  { name: 'C++', icon: '⚡' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Python', icon: '🐍' },
  { name: 'Java', icon: '☕' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Express', icon: '🚀' },
  { name: 'LangChain', icon: '🔗' },
  { name: 'CrewAI', icon: '🤖' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Git', icon: '🐙' },
  { name: 'Docker', icon: '🐳' },
]

const marqueeSkillsRow2 = [
  { name: 'Vite', icon: '⚡' },
  { name: 'Framer Motion', icon: '🎨' },
  { name: 'CSS', icon: '🎨' },
  { name: 'REST APIs', icon: '🌐' },
  { name: 'LangGraph', icon: '📊' },
  { name: 'Deep Learning', icon: '🧠' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Render', icon: '☁️' },
  { name: 'VS Code', icon: '💻' },
  { name: 'Postman', icon: '🚀' },
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title"><RevealText text="Skills" /></h2>

      <div className="skills-marquee-container">
        {/* Row 1: Left to Right */}
        <div className="skills-marquee-track track-ltr">
          {[...marqueeSkillsRow1, ...marqueeSkillsRow1].map((skill, index) => (
            <div key={`row1-${skill.name}-${index}`} className="skill-banner-badge">
              <span className="badge-icon">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left */}
        <div className="skills-marquee-track track-rtl">
          {[...marqueeSkillsRow2, ...marqueeSkillsRow2].map((skill, index) => (
            <div key={`row2-${skill.name}-${index}`} className="skill-banner-badge">
              <span className="badge-icon">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

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