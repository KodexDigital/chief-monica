import { useEffect, useState, type ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { memorialProfile } from '../data/memorialData'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Biography', to: '/biography' },
  { label: 'Memories', to: '/memories' },
  { label: 'Tribute', to: '/tribute' },
]

export function MemorialLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]')

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [pathname])

  return (
    <div className="memorial-page">
      <div className="space-particles" aria-hidden="true">
        {Array.from({ length: 26 }, (_, index) => (
          <span
            key={index}
            style={{
              left: `${(index * 13) % 100}%`,
              top: `${(index * 17) % 100}%`,
              animationDelay: `${(index * 0.7).toFixed(2)}s`,
              animationDuration: `${(8 + (index % 7))}s`,
            }}
          />
        ))}
      </div>

      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">✦</span>
          <div>
            <p>In loving memory</p>
            <h1>{memorialProfile.title}</h1>
          </div>
        </div>

        <div className="nav-cluster">
          <button
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav
            className={`nav-links${isMenuOpen ? ' nav-links--open' : ''}`}
            id="main-navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-button${isActive ? ' is-active' : ''}`}
                end={item.to === '/'}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {children}

      <footer className="memorial-footer">
        <div className="footer-simple-row">
          <div className="footer-simple-copy">
            <p>
              {memorialProfile.fullName}. This memorial is dedicated to preserving her life, legacy, and love.
            </p>
            <p>
              This site is protected by respect, remembrance, and family devotion. All content is intended to honour her memory with care.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
