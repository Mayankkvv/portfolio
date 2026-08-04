import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Timeline from '../components/Timeline'
import CodingProfiles from '../components/CodingProfiles'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <CodingProfiles />
      <Achievements />
      <Contact />
    </div>
  )
}

export default Home