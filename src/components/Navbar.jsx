import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

const amLogo = '/IMG-20260306-WA0432.svg'

import businessLicense from '../assets/Business_License_-_NB_177305049224.pdf'

const navLinks = [
  { label: 'Home', href: '#home', type: 'hash' },
  { label: 'Businesses', href: '#services', type: 'hash' },
  { label: 'About', href: '#about', type: 'hash' },
  { label: 'AM Media', path: '/am-media', type: 'route' },
  { label: 'Portfolio', path: '/portfolio', type: 'route' },
  { label: 'Why Us', href: '#whyus', type: 'hash' },
  { label: 'License', type: 'pdf', file: businessLicense },
  { label: 'Contact', href: '#contact', type: 'hash' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleHashClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      // Clean up the URL hash so refreshes don't stick here
      window.history.pushState('', document.title, window.location.pathname + window.location.search)
    }
  }

  const isLightNav = location.pathname === '/am-media' || location.pathname === '/portfolio'

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}${isLightNav ? ' navbar-light' : ''}`}>
      <div className="container">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img src={amLogo} alt="AM" className="navbar-logo-svg" />
          <span className="navbar-logo-text">AJMALMUKHTAR</span>
        </Link>

        <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map((link) => {
            if (link.type === 'route') {
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            }
            if (link.type === 'pdf') {
              return (
                <a
                  key={link.label}
                  href={link.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            }
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setMenuOpen(false)
                  if (location.pathname !== '/') {
                    e.preventDefault()
                    navigate({ pathname: '/', hash: link.href.slice(1) })
                  } else {
                    handleHashClick(e, link.href)
                  }
                }}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        <div className="navbar-social">
          <a href="https://www.instagram.com/amgarage?igsh=MXM3OWM5azlhaDFneg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          </a>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
