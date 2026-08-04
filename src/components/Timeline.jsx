import { motion } from 'framer-motion'
import timeline from '../utils/timelineData'
import './Timeline.css'
import RevealText from './RevealText'

function Timeline() {
  return (
    <section id="timeline" className="timeline-section">
      <h2 className="section-title"><RevealText text="Timeline" /></h2>
      <div className="timeline-track">
        {timeline.map((item, i) => (
          <motion.div
            key={item.title}
            className="timeline-item"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Timeline