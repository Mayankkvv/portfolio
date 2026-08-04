import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </>
  )
}

export default App