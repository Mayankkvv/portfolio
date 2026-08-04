import { motion } from 'framer-motion'
import './Loader.css'

function Loader() {
  return (
    <motion.div
      className="loader-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div
        className="loader-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <span className="loader-bracket">{'{'}</span>
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          MK
        </motion.span>
        <span className="loader-bracket">{'}'}</span>
      </motion.div>
    </motion.div>
  )
}

export default Loader