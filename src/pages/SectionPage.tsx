import { useState } from 'react'
import { MemorialLayout } from './MemorialLayout'
import { familyMembers, memorialProfile } from '../data/memorialData'
import { memoryGallery } from '../data/memories'

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
    </div>
  )
}

function MemoryPhoto({ title, caption, image }: { title: string; caption: string; image: string }) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

  return (
    <div className={`gallery-image gallery-image--memory is-${status}`} aria-busy={status === 'loading'}>
      {status !== 'error' && (
        <img
          src={image}
          alt={`${title}. ${caption}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      )}
      {status === 'loading' && (
        <span className="photo-loader" role="status" aria-label={`Loading ${title}`}>
          <span className="photo-loader-spinner" aria-hidden="true" />
          <span>Loading photo</span>
        </span>
      )}
      {status === 'error' && <span className="photo-error" role="status">Photo unavailable</span>}
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

export type SectionPageKey = 'story' | 'journey' | 'family' | 'memories' | 'gallery' | 'memorial' | 'tributes' | 'legacy'

export default function SectionPage({ page }: { page: SectionPageKey }) {
  const pageClass = `page-shell story-shell section-page section-page--${page}`

  if (page === 'story') {
    return (
      <MemorialLayout>
        <main className={pageClass}>
          <section className="story-hero section-intro">
            <p className="eyebrow elegant">Biography</p>
            <h2>{memorialProfile.fullName}</h2>
            <p className="story-honorific">{memorialProfile.chieftaincyTitle}</p>
            <p>Welcome to her biography — a thoughtful reflection of her life, values, and the love she gave to family and community.</p>
          </section>

          <section className="story-archive">
            <div className="story-lead feature-panel">
              <p>{memorialProfile.intro}</p>
            </div>

            <div className="story-columns">
              {memorialProfile.storySections.map((section) => (
                <article key={section.heading} className="story-card detail-card">
                  <h3>{section.heading}</h3>
                  <p>{section.body}</p>
                  {section.details && (
                    <ul className="story-detail-list">
                      {section.details.map((detail) => <li key={detail}>{detail}</li>)}
                    </ul>
                  )}
                </article>
              ))}
            </div>

            <div className="story-quote feature-panel">
              <p>“{memorialProfile.quote}”</p>
            </div>
          </section>
        </main>
      </MemorialLayout>
    )
  }

  if (page === 'journey') {
    return (
      <MemorialLayout>
        <main className={pageClass}>
          <section className="story-hero section-intro">
            <p className="eyebrow elegant">Life journey</p>
            <h2>Moments that shaped her legacy</h2>
            <p>{memorialProfile.intro}</p>
          </section>

          <section className="story-archive">
            <div className="journey-overview feature-panel">
              <div>
                <p className="eyebrow">A life of service</p>
                <h3>Faith, labour, and devotion</h3>
              </div>
              <p>
                Her journey was marked by courage, faith, service, and enduring love. Each chapter reflected a life devoted to family, purpose, and compassion.
              </p>
            </div>

            <div className="journey-grid">
              {memorialProfile.timeline.map((item) => (
                <article key={`${item.year}-${item.title}`} className="journey-card detail-card">
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

            <div className="summary-strip" aria-label="Life highlights">
              {memorialProfile.lifeHighlights.map((item) => (
                <article key={item.title} className="summary-card">
                  <span>{item.title}</span>
                  <strong>{item.body}</strong>
                </article>
              ))}
            </div>
          </section>
        </main>
      </MemorialLayout>
    )
  }

  if (page === 'family') {
    return (
      <MemorialLayout>
        <main className={pageClass}>
          <section className="story-hero section-intro">
            <p className="eyebrow elegant">Family</p>
            <h2>The generations she shaped</h2>
            <p>Her legacy lives on through the people who carry her faith, values, and compassion forward.</p>
          </section>

          <section className="story-archive">
            <div className="story-lead feature-panel">
              <p>The family tree reflects a living memorial of love, duty, and devotion. Each branch is a continuation of the grace and strength she gave to those she loved.</p>
            </div>

            <div className="family-tree-grid family-tree-grid--page">
              <div className="family-tree-root-block">
                {familyTreeByGeneration[0]?.members.map((member) => (
                  <article key={member.id} className="family-tree-node family-tree-node--root">
                    <div className="family-tree-node-connector" aria-hidden="true" />
                    <div className={`family-node-photo family-node-avatar family-node-avatar--${getMemberAvatarTone(member.name)}`} aria-label={`${member.name} portrait placeholder`}>
                      {member.photo ? <img src={member.photo} alt={member.name} className="family-node-image" /> : getMemberInitials(member.name)}
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
                      <article key={member.id} className={`family-tree-node ${member.deceased ? 'family-tree-node--deceased' : ''}`}>
                        <div className="family-tree-node-connector" aria-hidden="true" />
                        {member.deceased && <span className="family-deceased-badge">Deceased</span>}
                        <div className={`family-node-photo family-node-avatar family-node-avatar--${getMemberAvatarTone(member.name)}`} aria-label={`${member.name} portrait placeholder`}>
                          {member.photo ? <img src={member.photo} alt={member.name} className="family-node-image" /> : getMemberInitials(member.name)}
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

            <div className="family-grid">
              {memorialProfile.familyHighlights.map((item) => (
                <article key={item.label} className="family-card detail-card">
                  <span>{item.label}</span>
                  <p>{item.value}</p>
                </article>
              ))}
            </div>
          </section>
        </main>
      </MemorialLayout>
    )
  }

  if (page === 'memories') {
    return (
      <MemorialLayout>
        <main className={pageClass}>
          <section className="story-hero section-intro">
            <p className="eyebrow elegant">Memories</p>
            <h2>Stories carried in the heart</h2>
          </section>

          <section className="gallery-grid full-gallery-grid memory-grid">
            {[...memorialProfile.gallery, ...memoryGallery].map((item) => (
              <article key={`${item.title}-${item.caption}`} className="gallery-card gallery-view-card detail-card">
                <MemoryPhoto title={item.title} caption={item.caption} image={item.image} />
                <div className="gallery-content">
                  <h4>{item.title}</h4>
                  <p>{item.caption}</p>
                </div>
              </article>
            ))}
          </section>

          {memorialProfile.notes.length > 0 && (
            <section className="tribute-panel memorial-tribute-panel feature-panel">
              <SectionHeader eyebrow="Shared remembrance" title="Words that still echo" />
              <div className="tribute-notes">
                {memorialProfile.notes.map((note) => (
                  <article key={note.author} className="tribute-note">
                    <span>{note.author}</span>
                    <p>“{note.text}”</p>
                  </article>
                ))}
              </div>
            </section>
          )}
        </main>
      </MemorialLayout>
    )
  }

  if (page === 'gallery') {
    return (
      <MemorialLayout>
        <main className={pageClass}>
          <section className="story-hero section-intro">
            <p className="eyebrow elegant">Family archive</p>
            <h2>Moments remembered with love</h2>
          </section>

          <section className="gallery-grid full-gallery-grid album-grid">
            {[...memorialProfile.gallery, ...memoryGallery].map((item) => (
              <article key={`${item.title}-${item.caption}`} className="gallery-card gallery-view-card detail-card">
                <MemoryPhoto title={item.title} caption={item.caption} image={item.image} />
                <div className="gallery-content">
                  <h4>{item.title}</h4>
                  <p>{item.caption}</p>
                </div>
              </article>
            ))}
          </section>
        </main>
      </MemorialLayout>
    )
  }

  if (page === 'memorial') {
    return (
      <MemorialLayout>
        <main className={pageClass}>
          <section className="story-hero section-intro">
            <p className="eyebrow elegant">Memorial</p>
            <h2>Service and remembrance</h2>
          </section>

          {memorialProfile.funeralInfo.length > 0 && (
            <section className="service-grid full-service-grid memorial-grid">
              {memorialProfile.funeralInfo.map((item) => (
                <article key={item.title} className="service-card detail-card">
                  <h4>{item.title}</h4>
                  <p>{item.details}</p>
                </article>
              ))}
            </section>
          )}

          {memorialProfile.notes.length > 0 && (
            <section className="tribute-panel memorial-tribute-panel feature-panel">
              <SectionHeader eyebrow="Tributes" title="Messages of love" />
              <div className="tribute-notes">
                {memorialProfile.notes.map((note) => (
                  <article key={note.author} className="tribute-note">
                    <span>{note.author}</span>
                    <p>“{note.text}”</p>
                  </article>
                ))}
              </div>
            </section>
          )}
        </main>
      </MemorialLayout>
    )
  }

  if (page === 'tributes') {
    return (
      <MemorialLayout>
        <main className={pageClass}>
          <section className="story-hero section-intro">
            <p className="eyebrow elegant">Tributes</p>
            <h2>Words of love and remembrance</h2>
            <p>A place to honour her life with memories, prayers, and messages that keep her warmth alive in the hearts of her family and loved ones.</p>
          </section>

          <section className="tribute-panel memorial-tribute-panel feature-panel">
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

          {memorialProfile.notes.length > 0 && (
            <section className="tribute-panel memorial-tribute-panel feature-panel">
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
          )}
        </main>
      </MemorialLayout>
    )
  }

  return (
    <MemorialLayout>
      <main className={pageClass}>
        <section className="story-hero section-intro">
          <p className="eyebrow elegant">Legacy</p>
          <h2>The values she planted continue to grow</h2>
          <p>Her life remains a blessing in the hearts of her family and community. Her example shaped the people around her and left behind a lasting legacy of compassion, dignity, and love.</p>
        </section>

        <section className="story-archive">
          <div className="story-lead feature-panel">
            <p>{memorialProfile.intro}</p>
          </div>

          <div className="story-columns">
            {memorialProfile.lifeHighlights.map((item) => (
              <article key={item.title} className="story-card detail-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="family-grid">
            {memorialProfile.familyHighlights.map((item) => (
              <article key={item.label} className="family-card detail-card">
                <span>{item.label}</span>
                <p>{item.value}</p>
              </article>
            ))}
          </div>

          <div className="story-quote feature-panel">
            <p>“{memorialProfile.quote}”</p>
          </div>
        </section>
      </main>
    </MemorialLayout>
  )
}
