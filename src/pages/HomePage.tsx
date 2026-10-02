import { MemorialLayout } from './MemorialLayout'
import heroImage from '../assets/granny.png'
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

export default function HomePage() {
  return (
    <MemorialLayout>
      <main className="page-shell">
        <section className="welcome-intro" data-reveal>
          <p className="eyebrow">Welcome</p>
          <h3>Welcome to this remembrance of a life filled with faith, dignity, and love.</h3>
          <p>
            This memorial begins with gratitude, reflection, and love. We invite you to walk gently through the story of a life that shaped generations and remains deeply cherished by family and friends.
          </p>
        </section>

        <section className="hero-section" id="home" data-reveal>
          <div className="hero-copy">
            <p className="eyebrow elegant">In loving memory of</p>
            <h2>{memorialProfile.fullName}</h2>

            <div className="hero-message-card" aria-label="Her enduring legacy">
              <div className="hero-message-copy">
                <p className="hero-message-label">Her enduring legacy</p>
                <p className="hero-message-text">A life of faith, enterprise, and devotion to family and community.</p>
              </div>
            </div>

            <p>{memorialProfile.heroDescription}</p>
            <div className="hero-actions">
              <a href="/biography" className="primary-btn">Read biography</a>
              <a href="/tribute" className="secondary-btn">Leave a tribute</a>
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

        <section className="home-life-overview" data-reveal>
          <div className="home-life-copy">
            <p className="eyebrow">A life remembered</p>
            <h3>A woman of faith, industry, and devotion to family.</h3>
            <p>{memorialProfile.intro}</p>
            <a href="/biography" className="text-link">Explore her biography <span aria-hidden="true">→</span></a>
          </div>
          <div className="home-life-chapters" aria-label="Life chapters">
            {memorialProfile.storySections.slice(0, 3).map((section, index) => (
              <article className="home-life-chapter" key={section.heading}>
                <span className="home-chapter-number">0{index + 1}</span>
                <div>
                  <h4>{section.heading}</h4>
                  <p>{section.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-feature-band" data-reveal>
          <div className="section-header home-header">
            <p className="eyebrow">A life of grace</p>
            <h3>Her presence brought comfort, dignity, and love to all who knew her.</h3>
          </div>

          <div className="home-feature-grid">
            {memorialProfile.lifeHighlights.map((item) => (
              <article key={item.title} className="home-feature-card">
                <span>{item.title}</span>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-memory-preview" data-reveal>
          <div className="home-preview-copy">
            <p className="eyebrow">Family memories</p>
            <h3>Warmth remembered in photographs and prayer.</h3>
            <p>
              Her life was defined not only by what she achieved, but by the way she made people feel safe, welcomed, and cherished. In every celebration and every quiet moment, her love made the family stronger.
            </p>
            <a href="/memories" className="secondary-btn">View memories</a>
          </div>

          <div className="home-preview-grid">
            {memoryGallery.slice(0, 4).map((item) => (
              <article key={item.title} className="home-preview-card">
                <div className="home-preview-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(11, 13, 15, 0.18), rgba(11, 13, 15, 0.72)), url('${item.image}')` }} />
                <div className="home-preview-copy-inner">
                  <h4>{item.title}</h4>
                  <p>{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-legacy-strip" data-reveal>
          <div>
            <p className="eyebrow">Her legacy continues</p>
            <h3>Faith, love, and character still guide the generations she shaped.</h3>
          </div>
          <div className="home-legacy-list">
            {memorialProfile.familyHighlights.map((item) => (
              <div key={item.label} className="home-legacy-item">
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="home-journey-links" aria-label="Explore the memorial" data-reveal>
          <div className="section-header home-header">
            <p className="eyebrow">Continue remembering</p>
            <h3>Choose a path through her story.</h3>
          </div>
          <div className="home-path-grid">
            <a className="home-path-link" href="/biography">
              <span>01</span>
              <h4>Read her biography</h4>
              <p>Discover the life, work, faith, and family story behind her legacy.</p>
              <span className="home-path-arrow" aria-hidden="true">→</span>
            </a>
            <a className="home-path-link" href="/memories">
              <span>02</span>
              <h4>Visit the memories</h4>
              <p>Spend time with photographs and moments preserved by the family.</p>
              <span className="home-path-arrow" aria-hidden="true">→</span>
            </a>
            <a className="home-path-link" href="/tribute">
              <span>03</span>
              <h4>Share a tribute</h4>
              <p>Leave words of remembrance, gratitude, or love.</p>
              <span className="home-path-arrow" aria-hidden="true">→</span>
            </a>
          </div>
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

        {memorialProfile.funeralInfo.length > 0 && (
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
        )}

        <section className="family-tree-section" data-reveal>
          <SectionHeader eyebrow="Family legacy" title="Her generations" />
          <div className="family-tree-grid">
            <div className="family-tree-root-block">
              {familyTreeByGeneration[0]?.members.map((member) => (
                <article key={member.id} className="family-tree-node family-tree-node--root">
                  <div className="family-tree-node-connector" aria-hidden="true" />
                  <div className={`family-node-photo family-node-avatar family-node-avatar--${getMemberAvatarTone(member.name)}`} aria-label={`${member.name} portrait placeholder`}>
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
                      <div className={`family-node-photo family-node-avatar family-node-avatar--${getMemberAvatarTone(member.name)}`} aria-label={`${member.name} portrait placeholder`}>
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
    </MemorialLayout>
  )
}
