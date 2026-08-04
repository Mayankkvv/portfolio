import { useState, useEffect } from 'react'

function useRotatingText(words, intervalMs = 2000) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, intervalMs)
    return () => clearInterval(timer)
  }, [words, intervalMs])

  return words[index]
}

export default useRotatingText