import { useState, useCallback } from 'react'

let rippleId = 0

function useRipple() {
  const [ripples, setRipples] = useState([])

  const addRipple = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    const id = rippleId++

    setRipples((prev) => [...prev, { id, x, y, size }])

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 600)
  }, [])

  return { ripples, addRipple }
}

export default useRipple