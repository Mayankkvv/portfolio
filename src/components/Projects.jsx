import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import projects from '../utils/projectsData'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <Link to={`/projects/${project.id}`} className="project-card-link">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.tagline}</p>
                <div className="project-tech-row">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="project-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </Link>
            <div className="project-card-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                  <FaGithub /> Code
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects