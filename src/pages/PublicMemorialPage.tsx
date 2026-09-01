import { useEffect, useState } from 'react'
import heroImage from '../assets/granny.png'
import { familyMembers, memorialProfile, navigation } from '../data/memorialData'
import type { GalleryItem } from '../types/memorial'

interface SectionHeaderProps {
  eyebrow: string
  title: string
}

function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
    </div>
  )
}

const getMemberInitials = (name: string) => {
  const parts = name.split(/\s+/).filter(Boolean)
  const initials = parts.slice(0, 2).map((part) => part[0]?.toUpperCase() ?? '').join('')
  return initials || '?'
}

const getMemberAvatarTone = (name: string) => {
  const value = [...name].reduce((total, character) => total + character.charCodeAt(0), 0)
  const tones = ['gold', 'sand', 'rose', 'ivory']
  return tones[value % tones.length]
}

const viewNavigation = [
  { label: 'Home', view: 'home' },
  { label: 'Biography', view: 'biography' },
  { label: 'Gallery', view: 'gallery' },
  { label: 'Memorial', view: 'memorial' },
  { label: 'Tribute', view: 'tribute' },
] as const

type ViewName = (typeof viewNavigation)[number]['view']

export default function PublicMemorialPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [activeView, setActiveView] = useState<ViewName>('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigate = (view: ViewName) => {
    setActiveView(view)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const familyTreeByGeneration = Array.from(
    { length: Math.max(...familyMembers.map((member) => member.generation), 1) },
    (_, generationIndex) => {
      const generation = generationIndex + 1
      return {
        generation,
        members: familyMembers.filter((member) => member.generation === generation),
      }
    },
  )

  useEffect(() => {
    if (!selectedImage) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedImage])

  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]')

    if (!revealElements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -30px 0px',
      },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [activeView])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [activeView])

  const renderHeader = (navLabel: string, title = memorialProfile.title) => (
    <header className="topbar">
      <div className="brand-block">
        <span className="brand-mark">✦</span>
        <div>
          <p>In loving memory</p>
          <h1>{title}</h1>
        </div>
      </div>

      <div className="nav-cluster">
        <nav className={`nav-links ${mobileMenuOpen ? 'nav-links--open' : ''}`} aria-label={navLabel}>
          {viewNavigation.map((item) => (
            <button
              key={item.label}
              type="button"
              className="nav-button"
              onClick={() => handleNavigate(item.view)}
              aria-pressed={activeView === item.view}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )

  const ageInYears = memorialProfile.passingYear - memorialProfile.birthYear

  const renderFooter = () => (
    <footer className="memorial-footer">
      <div className="footer-simple-row">
        <div className="footer-simple-copy">
          <p>
            © {memorialProfile.birthYear}-{memorialProfile.passingYear}, {memorialProfile.fullName}. This memorial is dedicated to preserving her life, legacy, and love.
          </p>
          <p>
            This site is protected by respect, remembrance, and family devotion. All content is intended to honour her memory with care.
          </p>
        </div>
      </div>
    </footer>
  )

  const renderHomeView = () => (
    <>
      {renderHeader('Main navigation', memorialProfile.title)}

      <main className="page-shell">
        <section className="hero-section" id="home" data-reveal>
          <div className="hero-copy">
            <p className="eyebrow elegant">In loving memory of</p>
            <h2>{memorialProfile.fullName}</h2>
            <p className="hero-subtitle">
              {memorialProfile.birthYear} — {memorialProfile.passingYear}
            </p>

            <div className="hero-age-card" aria-label={`Her age at passing was ${ageInYears} years`}>
              <div className="hero-age-ring">
                <span>{ageInYears}</span>
              </div>
              <div className="hero-age-copy">
                <p className="hero-age-label">Years of life</p>
                <p className="hero-age-text">A life shaped by faith, family, and grace.</p>
              </div>
            </div>

            <p>{memorialProfile.heroDescription}</p>
            <div className="hero-actions">
              <button type="button" className="primary-btn" onClick={() => handleNavigate('biography')}>Read her biography</button>
              <button type="button" className="secondary-btn" onClick={() => handleNavigate('tribute')}>Leave a tribute</button>
            </div>

            <div className="hero-notes" aria-label="Life values">
              {memorialProfile.values.map((value) => (
                <div key={value} className="note-pill">{value}</div>
              ))}
            </div>
          </div>

          <div className="hero-portrait" aria-label={memorialProfile.fullName}>
            <div className="portrait-frame">
              <div className="portrait-glow" />
              <img src={heroImage} alt={memorialProfile.fullName} className="portrait-image" />
            </div>
          </div>
        </section>

        <section className="editorial-band" aria-label="Memorial quote" data-reveal>
          <p className="eyebrow">A life of grace</p>
          <blockquote>{memorialProfile.quote}</blockquote>
        </section>

        <section className="summary-strip" aria-label="Life summary" data-reveal>
          {memorialProfile.milestones.map((item) => (
            <article key={item.label} className="summary-card">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </section>

        <section className="story-grid" id="story" data-reveal>
          <div className="story-copy">
            <p className="eyebrow">A remembrance</p>
            <h2>Forever held in love</h2>
            <p>
              Her memory remains a blessing to all who knew her. Through faith, family, and the light she shared, she continues to be deeply cherished and lovingly remembered.
            </p>
          </div>

          <aside className="story-panel">
            <div className="panel-badge">“Her love still lives.”</div>
            <ul>
              <li>Faith that shaped her life</li>
              <li>Love that comforted many hearts</li>
              <li>Legacy that continues through family</li>
            </ul>
          </aside>
        </section>

        <section className="bio-sections" data-reveal>
          <article className="info-card">
            <h4>In loving memory</h4>
            <p>
              We remember her with deep affection, gratitude, and reverence. Her life brought warmth, dignity, and strength to every home she touched, and her spirit continues to live on in the love of her family.
            </p>
          </article>
          <article className="info-card">
            <h4>Her enduring legacy</h4>
            <p>
              Her example of compassion, humility, and devotion remains a guiding light. The values she lived by continue to inspire generations and keep her memory alive in prayer, love, and honour.
            </p>
          </article>
        </section>

        <section className="highlights-panel" data-reveal>
          <SectionHeader eyebrow="A life well lived" title="The light she carried" />
          <div className="highlights-grid">
            {memorialProfile.lifeHighlights.map((item) => (
              <article key={item.title} className="highlight-card">
                <span>{item.title}</span>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="timeline-section" id="timeline" data-reveal>
          <SectionHeader eyebrow="Timeline" title="Moments that shaped her legacy" />
          <div className="timeline-grid">
            {memorialProfile.timeline.map((item) => (
              <article key={item.year} className="timeline-card">
                <span>{item.year}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="legacy-section" id="legacy" data-reveal>
          <div className="legacy-copy">
            <p className="eyebrow">Her legacy</p>
            <h3>The values she planted continue to grow.</h3>
            <p>
              Her life remains a blessing in the hearts of her family and community. Her example shaped the people around her and left behind a lasting legacy of compassion, dignity, and love.
            </p>
          </div>

          <div className="quote-card">
            <p>{memorialProfile.quote}</p>
          </div>
        </section>

        <section className="service-section" data-reveal>
          <SectionHeader eyebrow="Memorial programme" title="Service information" />
          <div className="service-grid">
            {memorialProfile.funeralInfo.map((item) => (
              <article key={item.title} className="service-card">
                <h4>{item.title}</h4>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="family-tree-section" data-reveal>
          <SectionHeader eyebrow="Family legacy" title="Her generations" />
          <div className="family-tree-grid">
            <div className="family-tree-root-block">
              {familyTreeByGeneration[0]?.members.map((member) => (
                <article
                  key={member.id}
                  className="family-tree-node family-tree-node--root"
                >
                  <div className="family-tree-node-connector" aria-hidden="true" />
                  <div
                    className={`family-node-photo family-node-avatar family-node-avatar--${getMemberAvatarTone(member.name)}`}
                    aria-label={`${member.name} portrait placeholder`}
                  >
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="family-node-image" />
                    ) : (
                      getMemberInitials(member.name)
                    )}
                  </div>
                  <h4>{member.name}</h4>
                  <span>{member.relationship}</span>
                  <p>{member.note ?? '[To be confirmed]'}</p>
                </article>
              ))}
            </div>

            {familyTreeByGeneration.slice(1).map(({ generation, members }) => (
              <div key={generation} className="family-generation-block">
                <p className="family-generation-label">Generation {generation}</p>
                <div className="family-generation-row">
                  {members.map((member) => (
                    <article
                      key={member.id}
                      className={`family-tree-node ${member.deceased ? 'family-tree-node--deceased' : ''}`}
                    >
                      <div className="family-tree-node-connector" aria-hidden="true" />
                      {member.deceased && <span className="family-deceased-badge">Deceased</span>}
                      <div
                        className={`family-node-photo family-node-avatar family-node-avatar--${getMemberAvatarTone(member.name)}`}
                        aria-label={`${member.name} portrait placeholder`}
                      >
                        {member.photo ? (
                          <img src={member.photo} alt={member.name} className="family-node-image" />
                        ) : (
                          getMemberInitials(member.name)
                        )}
                      </div>
                      <h4>{member.name}</h4>
                      <span>{member.relationship}</span>
                      {member.note ? <p>{member.note}</p> : null}
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="gallery-section" data-reveal>
          <SectionHeader eyebrow="Family archive" title="Moments remembered with love" />
          <div className="gallery-grid">
            {memorialProfile.gallery.map((item) => (
              <article key={item.title} className="gallery-card">
                <button
                  type="button"
                  className="gallery-trigger"
                  onClick={() => setSelectedImage(item)}
                  aria-label={`Open image for ${item.title}`}
                >
                  <div
                    className="gallery-image"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(11, 13, 15, 0.08), rgba(11, 13, 15, 0.82)), url('${item.image}')`,
                    }}
                  />
                </button>
                <div className="gallery-content">
                  <h4>{item.title}</h4>
                  <p>{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="family-section" data-reveal>
          <SectionHeader eyebrow="Family values" title="The pillars she left behind" />
          <div className="family-grid">
            {memorialProfile.familyHighlights.map((item) => (
              <article key={item.label} className="family-card">
                <span>{item.label}</span>
                <p>{item.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="closing-tribute" data-reveal>
          <div className="closing-copy">
            <p className="eyebrow">Forever remembered</p>
            <h3>Her story remains a blessing in every heart she touched.</h3>
          </div>
          <div className="closing-quote">“{memorialProfile.quote}”</div>
        </section>

        <section className="tribute-panel" id="tribute" data-reveal>
          <SectionHeader eyebrow="Tributes" title="Share a memory or prayer" />
          <form className="tribute-form">
            <div className="field-row">
              <label>
                Name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Relation
                <input type="text" placeholder="Daughter, grandson, friend" />
              </label>
            </div>
            <label>
              Tribute
              <textarea rows={5} placeholder="Write a memory, prayer, or note of love..." />
            </label>
            <button type="submit" className="primary-btn">Send love</button>
          </form>

          <div className="tribute-notes">
            {memorialProfile.notes.map((note) => (
              <article key={note.author} className="tribute-note">
                <span>{note.author}</span>
                <p>“{note.text}”</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      {renderFooter()}
    </>
  )

  const renderBiographyView = () => (
    <>
      {renderHeader('Biography navigation', memorialProfile.title)}

      <main className="page-shell story-shell">
        <section className="story-hero">
          <p className="eyebrow elegant">Biography</p>
          <h2>{memorialProfile.fullName}</h2>
          <p>{memorialProfile.heroDescription}</p>
        </section>

        <section className="story-archive">
          <div className="story-lead">
            <p>{memorialProfile.intro}</p>
          </div>

          <div className="story-columns">
            {memorialProfile.storySections.map((section) => (
              <article key={section.heading} className="story-card">
                <h3>{section.heading}</h3>
                <p>{section.body}</p>
              </article>
            ))}
          </div>

          <div className="story-quote">
            <p>“{memorialProfile.quote}”</p>
          </div>
        </section>
      </main>

      {renderFooter()}
    </>
  )

  const renderStoryView = () => (
    <>
      {renderHeader('Story navigation', memorialProfile.title)}

      <main className="page-shell story-shell">
        <section className="story-hero">
          <p className="eyebrow elegant">Her story</p>
          <h2>{memorialProfile.fullName}</h2>
          <p>{memorialProfile.heroDescription}</p>
        </section>

        <section className="story-archive">
          <div className="story-lead">
            <p>{memorialProfile.intro}</p>
          </div>

          <div className="story-columns">
            {memorialProfile.storySections.map((section) => (
              <article key={section.heading} className="story-card">
                <h3>{section.heading}</h3>
                <p>{section.body}</p>
              </article>
            ))}
          </div>

          <div className="story-quote">
            <p>“{memorialProfile.quote}”</p>
          </div>
        </section>
      </main>

      {renderFooter()}
    </>
  )

  const renderGalleryView = () => (
    <>
      {renderHeader('Gallery navigation', memorialProfile.title)}

      <main className="page-shell gallery-shell">
        <section className="story-hero">
          <p className="eyebrow elegant">Family archive</p>
          <h2>Moments remembered with love</h2>
        </section>

        <div className="gallery-grid full-gallery-grid">
          {memorialProfile.gallery.map((item) => (
            <article key={item.title} className="gallery-card gallery-view-card">
              <button
                type="button"
                className="gallery-trigger"
                onClick={() => setSelectedImage(item)}
                aria-label={`Open image for ${item.title}`}
              >
                <div
                  className="gallery-image"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(11, 13, 15, 0.08), rgba(11, 13, 15, 0.82)), url('${item.image}')`,
                  }}
                />
              </button>
              <div className="gallery-content">
                <h4>{item.title}</h4>
                <p>{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </main>

      {renderFooter()}
    </>
  )

  const renderMemorialView = () => (
    <>
      {renderHeader('Memorial navigation', memorialProfile.title)}

      <main className="page-shell memorial-shell">
        <section className="story-hero">
          <p className="eyebrow elegant">Memorial</p>
          <h2>Service and remembrance</h2>
        </section>

        <div className="service-grid full-service-grid">
          {memorialProfile.funeralInfo.map((item) => (
            <article key={item.title} className="service-card">
              <h4>{item.title}</h4>
              <p>{item.details}</p>
            </article>
          ))}
        </div>

        <div className="tribute-panel memorial-tribute-panel">
          <SectionHeader eyebrow="Tributes" title="Messages of love" />
          <div className="tribute-notes">
            {memorialProfile.notes.map((note) => (
              <article key={note.author} className="tribute-note">
                <span>{note.author}</span>
                <p>“{note.text}”</p>
              </article>
            ))}
          </div>
        </div>
      </main>

      {renderFooter()}
    </>
  )

  const renderTributeView = () => (
    <>
      {renderHeader('Tribute navigation', memorialProfile.title)}

      <main className="page-shell memorial-shell">
        <section className="story-hero">
          <p className="eyebrow elegant">Tribute</p>
          <h2>Words of love and remembrance</h2>
          <p>
            A place to honour her life with memories, prayers, and messages that keep her warmth alive in the hearts of her family and loved ones.
          </p>
        </section>

        <section className="tribute-panel memorial-tribute-panel">
          <SectionHeader eyebrow="Share a memory" title="Leave a tribute" />
          <form className="tribute-form">
            <div className="field-row">
              <label>
                Name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Relationship
                <input type="text" placeholder="Daughter, grandson, friend" />
              </label>
            </div>
            <label>
              Message
              <textarea rows={6} placeholder="Write a prayer, memory, or note of love for Chief Mrs. Monica..." />
            </label>
            <button type="submit" className="primary-btn">Send tribute</button>
          </form>
        </section>

        <section className="tribute-panel memorial-tribute-panel">
          <SectionHeader eyebrow="Messages of love" title="Shared remembrance" />
          <div className="tribute-notes">
            {memorialProfile.notes.map((note) => (
              <article key={note.author} className="tribute-note">
                <span>{note.author}</span>
                <p>“{note.text}”</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      {renderFooter()}
    </>
  )

  const spaceParticles = Array.from({ length: 26 }, (_, index) => (
    <span
      key={index}
      style={{
        left: `${(index * 13) % 100}%`,
        top: `${(index * 17) % 100}%`,
        animationDelay: `${(index * 0.7).toFixed(2)}s`,
        animationDuration: `${(8 + (index % 7))}s`,
      }}
    />
  ))

  return (
    <div className="memorial-page">
      <div className="space-particles" aria-hidden="true">{spaceParticles}</div>
      {activeView === 'home' && renderHomeView()}
      {activeView === 'biography' && renderBiographyView()}
      {activeView === 'gallery' && renderGalleryView()}
      {activeView === 'memorial' && renderMemorialView()}
      {activeView === 'tribute' && renderTributeView()}

      {selectedImage && (
        <div className="lightbox-backdrop" onClick={() => setSelectedImage(null)}>
          <div
            className="lightbox-panel"
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image view"
            >
              ×
            </button>
            <img src={selectedImage.image} alt={selectedImage.caption} className="lightbox-image" />
            <div className="lightbox-copy">
              <h4>{selectedImage.title}</h4>
              <p>{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
