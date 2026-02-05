import { useEffect, useRef, useState } from 'react'
import { services } from './data'
import './Services.css'

export function Services() {
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
    <section id="services" className="services" ref={sectionRef}>
      <div className="services-decoration">
        <div className="decoration-line decoration-line-1"></div>
        <div className="decoration-line decoration-line-2"></div>
      </div>
      <div className="section-header">
        <span className="section-tag">What I Do</span>
        <h2 className="section-title">Services & Expertise</h2>
        <p className="section-description">
          Transforming ideas into reality with a combination of technical skills, creative vision, and years of experience.
        </p>
      </div>

      <div className={`services-grid ${isVisible ? 'visible' : ''}`}>
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="service-number">0{index + 1}</span>
            <div className="service-icon">
              <service.icon />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <div className="service-tags">
              {service.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="service-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
