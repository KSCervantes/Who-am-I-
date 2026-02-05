import { useState, useEffect, useRef } from 'react'
import { projects } from './data'
import { GithubIcon, ExternalLinkIcon } from './Icons'
import './Projects.css'

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="section-header">
        <span className="section-tag">Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-description">
          A selection of my recent work showcasing various technologies and problem-solving approaches.
        </p>
      </div>

      <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${hoveredProject === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.liveUrl} className="project-link" title="View Live">
                    <ExternalLinkIcon />
                    <span>Live Demo</span>
                  </a>
                  <a href={project.githubUrl} className="project-link" title="View Code">
                    <GithubIcon />
                    <span>Source</span>
                  </a>
                </div>
              </div>
              <div className="project-badge">Featured</div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
