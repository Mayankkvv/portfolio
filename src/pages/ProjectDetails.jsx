import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import projects from "../utils/projectsData";
import "../components/ProjectDetails.css";
import AnimatedCounter from "../components/AnimatedCounter";

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Project not found</h1>
        <Link to="/" className="project-details-back">
          ← Back to home
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="project-details"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/#projects" className="project-details-back">
        <FaArrowLeft /> Back to projects
      </Link>

      <div className="project-details-header">
        <h1>{project.title}</h1>
        <p>{project.tagline}</p>
        <div className="project-details-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              <FaGithub /> View Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="project-details-image">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>

      <div className="project-details-section">
        <h2>Tech Stack</h2>
        <div className="project-details-tech-row">
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      <div className="project-details-section">
        <h2>Key Features</h2>
        <ul className="project-details-features">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="project-details-section">
        <h2>Metrics</h2>
        <div className="project-details-metrics">
          {project.metrics.map((m) => (
            <div key={m.label} className="metric-block">
              <div className="metric-value">
                <AnimatedCounter value={m.value} />
              </div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="project-details-section">
        <h2>Architecture</h2>
        <div className="project-details-image">
          <img
            src={project.architectureImage}
            alt={`${project.title} architecture diagram`}
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectDetails;
