import { useState, type FormEvent } from 'react'
import { memorialProfile } from '../data/memorialData'
import { readTributes, saveTributes, type TributeEntry } from '../data/tributeStore'
import { MemorialLayout } from './MemorialLayout'

export default function TributesPage() {
  const [entries, setEntries] = useState<TributeEntry[]>(readTributes)
  const [notice, setNotice] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const approvedEntries = entries.filter((entry) => entry.status === 'approved')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()
    const relationship = String(formData.get('relationship') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    if (!name || !relationship || !message) {
      setNotice({ type: 'error', text: 'Please complete every field before sending your tribute.' })
      return
    }

    const tribute: TributeEntry = {
      id: window.crypto.randomUUID(),
      name,
      relationship,
      message,
      submittedAt: new Date().toISOString(),
      status: 'pending',
    }
    const updatedEntries = [...readTributes(), tribute]

    if (!saveTributes(updatedEntries)) {
      setNotice({ type: 'error', text: 'This browser could not save your tribute. Please check its local storage settings and try again.' })
      return
    }

    setEntries(updatedEntries)
    setNotice({
      type: 'success',
      text: `Thank you, ${name}. Your tribute has been received and is awaiting family review.`,
    })
    form.reset()
  }

  return (
    <MemorialLayout>
      <main className="page-shell story-shell section-page section-page--tributes">
        <section className="story-hero section-intro">
          <p className="eyebrow elegant">Tributes</p>
          <h2>Words of love and remembrance</h2>
          <p>A place to honour her life with memories, prayers, and messages that keep her warmth alive in the hearts of her family and loved ones.</p>
        </section>

        <section className="tribute-panel feature-panel" aria-labelledby="shared-tributes-title">
          <div className="section-header">
            <p className="eyebrow">Messages of love</p>
            <h3 id="shared-tributes-title">Shared remembrance</h3>
          </div>
          <div className="tribute-message-list">
            {memorialProfile.notes.map((note) => (
              <article key={`family-${note.author}`} className="tribute-message-card">
                <div className="tribute-message-heading">
                  <h4>{note.author}</h4>
                  <span>Family remembrance</span>
                </div>
                <p>“{note.text}”</p>
              </article>
            ))}
            {approvedEntries.map((entry) => (
              <article key={entry.id} className="tribute-message-card">
                <div className="tribute-message-heading">
                  <h4>{entry.name}</h4>
                  <span>{entry.relationship}</span>
                </div>
                <p>“{entry.message}”</p>
                <time dateTime={entry.submittedAt}>{new Intl.DateTimeFormat(undefined, { dateStyle: 'long' }).format(new Date(entry.submittedAt))}</time>
              </article>
            ))}
            {memorialProfile.notes.length === 0 && approvedEntries.length === 0 && (
              <p className="tribute-empty">No tributes have been shared publicly yet.</p>
            )}
          </div>
        </section>

        <section className="tribute-panel feature-panel" aria-labelledby="leave-tribute-title">
          <div className="section-header">
            <p className="eyebrow">Share a memory</p>
            <h3 id="leave-tribute-title">Leave a tribute</h3>
          </div>
          <form className="tribute-form" onSubmit={handleSubmit}>
            <div className="field-row">
              <label htmlFor="tribute-name">
                Your name
                <input id="tribute-name" name="name" type="text" autoComplete="name" maxLength={120} placeholder="Your full name" required />
              </label>
              <label htmlFor="tribute-relationship">
                Relationship to her
                <input id="tribute-relationship" name="relationship" type="text" maxLength={120} placeholder="Daughter, grandson, friend" required />
              </label>
            </div>
            <label htmlFor="tribute-message">
              Your message
              <textarea id="tribute-message" name="message" rows={6} maxLength={2000} placeholder="Write a prayer, memory, or note of love for Chief Mrs. Monica..." required />
            </label>
            {notice && <p className={`tribute-notice tribute-notice--${notice.type}`} role={notice.type === 'error' ? 'alert' : 'status'}>{notice.text}</p>}
            <button type="submit" className="primary-btn">Send tribute</button>
          </form>
        </section>
      </main>
    </MemorialLayout>
  )
}
