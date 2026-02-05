import { useState, useEffect } from 'react'
import './Navbar.css'
import { LinkedInIcon, XIcon, EmailIcon } from './Icons'

interface NavbarProps {
  activeSection: string
  onNavigate: (section: string) => void
}

const navItems = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'services', label: 'Services', icon: '⚡' },
  { id: 'projects', label: 'Projects', icon: '💼' },
  { id: 'contact', label: 'Contact', icon: '✉️' },
]

const socialLinks = [
  { icon: LinkedInIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: XIcon, href: 'https://x.com', label: 'X' },
]

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleNavigate = (section: string) => {
    onNavigate(section)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          <img src="/LOGO1.svg" alt="Logo" className="logo-image" />
        </div>

        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavigate(item.id)}
            >
              <span className="nav-link-text">{item.label}</span>
            </button>
          ))}
        </div>

        <button
          className="nav-cta"
          onClick={() => handleNavigate('contact')}
        >
          <span>Let's Talk</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>

        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <img src="/LOGO1.svg" alt="Logo" className="mobile-logo" />
          <button
            className="mobile-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className="mobile-menu-content">
          <div className="mobile-nav-links">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavigate(item.id)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="mobile-nav-icon">{item.icon}</span>
                <span className="mobile-nav-text">{item.label}</span>
                <svg className="mobile-nav-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            ))}
          </div>

          <div className="mobile-menu-footer">
            <p className="mobile-footer-text">Connect with me</p>
            <div className="mobile-social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-social-link"
                  aria-label={social.label}
                  style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                >
                  <social.icon />
                </a>
              ))}
              <a
                href="mailto:hello@example.com"
                className="mobile-social-link"
                aria-label="Email"
                style={{ animationDelay: '0.35s' }}
              >
                <EmailIcon />
              </a>
            </div>

            <button
              className="mobile-cta"
              onClick={() => handleNavigate('contact')}
            >
              <span>Start a Project</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  )
}
