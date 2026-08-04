import { motion } from 'framer-motion'
import { FaTrophy } from 'react-icons/fa'
import achievements from '../utils/achievementsData'
import './Achievements.css'
import RevealText from './RevealText'

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <h2 className="section-title"><RevealText text="Achievements" /></h2>
      <div className="achievements-grid">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            className="achievement-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <FaTrophy className="achievement-icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Achievements