import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'

function AnimatedCounter({ value }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  // Split the value into a leading number and any trailing text (e.g. "20+" -> 20 and "+")
  const match = String(value).match(/^(\d+)(.*)$/)
  const numericPart = match ? parseInt(match[1], 10) : null
  const suffix = match ? match[2] : ''

  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView && numericPart !== null) {
      const controls = animate(count, numericPart, { duration: 1.2, ease: 'easeOut' })
      return () => controls.stop()
    }
  }, [isInView, numericPart, count])

  if (numericPart === null) {
    // Non-numeric values (e.g. "C++17") just render as-is, no animation
    return <span ref={ref}>{value}</span>
  }

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export default AnimatedCounter