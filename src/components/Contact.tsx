import { useEffect, useRef, useState } from 'react'
import { socialLinks } from './data'
import { EmailIcon, LinkedInIcon, TwitterIcon } from './Icons'
import './Contact.css'

export function Contact() {
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
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-background">
        <div className="contact-gradient"></div>
      </div>
      <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description">
            Have a project in mind? Let's discuss how we can bring your ideas to life and create something amazing.
          </p>
        </div>

        <div className="contact-options">
          <a href="mailto:helloo@devworkstudios.net" className="contact-card">
            <div className="contact-card-icon">
              <EmailIcon />
            </div>
            <div className="contact-card-content">
              <span className="contact-card-title">Email Me</span>
              <span className="contact-card-subtitle">helloo@devworkstudios.net</span>
            </div>
            <div className="contact-card-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/kyle-cervantes?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-card-icon linkedin">
              <LinkedInIcon />
            </div>
            <div className="contact-card-content">
              <span className="contact-card-title">LinkedIn</span>
              <span className="contact-card-subtitle">Let's connect</span>
            </div>
            <div className="contact-card-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-card-icon twitter">
              <TwitterIcon />
            </div>
            <div className="contact-card-content">
              <span className="contact-card-title">Twitter / X</span>
              <span className="contact-card-subtitle">Follow for updates</span>
            </div>
            <div className="contact-card-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </a>
        </div>

        <div className="social-links-footer">
          <p className="social-label">Find me on</p>
          <div className="social-links-wrapper">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={social.name}
                style={{ '--hover-color': social.color } as React.CSSProperties}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
