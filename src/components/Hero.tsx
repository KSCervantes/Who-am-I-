import { useState, useEffect } from 'react'
import './Hero.css'

interface HeroProps {
  onNavigate: (section: string) => void
}

// YouTube video ID - Replace with your video ID
// Example: For https://www.youtube.com/watch?v=dQw4w9WgXcQ, the ID is "dQw4w9WgXcQ"
const YOUTUBE_VIDEO_ID = "8tCW6_7XfPg"

const roles = [
  "Full Stack Developer",
  "Game Developer",
  "Machine Learning Enthusiast",
  "Tech Enthusiast"
]

export function Hero({ onNavigate }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true)
  const [roleIndex, setRoleIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient-orb hero-orb-1"></div>
        <div className="hero-gradient-orb hero-orb-2"></div>
        <div className="hero-gradient-orb hero-orb-3"></div>
      </div>
      <div className={`hero-wrapper ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for Freelance
          </div>
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Kyle Cervantes</span>
            <span className="role" key={roleIndex}>{roles[roleIndex]}</span>
          </h1>
          <p className="hero-description">
            I craft digital experiences that blend creativity with functionality.
            Passionate about building products that make a difference and push the boundaries of what's possible.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => onNavigate('projects')}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => onNavigate('contact')}>
              Get in Touch
            </button>
          </div>
        </div>

        <div className="hero-video">
          <div className="video-container">
            <div className="video-glow"></div>
            <iframe
              key={isMuted ? 'muted' : 'unmuted'}
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1`}
              title="Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-overlay"></div>

            {/* Mute/Unmute Button */}
            <button
              className="video-mute-btn"
              onClick={() => setIsMuted(!isMuted)}
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>

            <a
              href={`https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="video-badge"
            >
              <span className="play-icon">▶</span>
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
