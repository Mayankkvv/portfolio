import { Suspense, lazy, useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Loader from './components/Loader'
import './App.css'

const ProjectDetails = lazy(() => import('./pages/ProjectDetails'))

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <Suspense fallback={<div className="page-loading">Loading...</div>}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <Home />
                    </motion.div>
                  }
                />
                <Route
                  path="/projects/:projectId"
                  element={
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <ProjectDetails />
                    </motion.div>
                  }
                />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </>
      )}
    </>
  )
}

export default App