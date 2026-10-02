import { useState, type FormEvent } from 'react'
import {
  createAdminPassphrase,
  hasAdminPassphrase,
  isAdminSessionActive,
  readTributes,
  saveTributes,
  setAdminSessionActive,
  verifyAdminPassphrase,
  type TributeEntry,
  type TributeStatus,
} from '../data/tributeStore'
import { MemorialLayout } from './MemorialLayout'

export default function AdminPage() {
  const [hasPassphrase, setHasPassphrase] = useState(hasAdminPassphrase)
  const [isLoggedIn, setIsLoggedIn] = useState(isAdminSessionActive)
  const [entries, setEntries] = useState<TributeEntry[]>(readTributes)
  const [notice, setNotice] = useState('')

  async function handleSetup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const passphrase = String(formData.get('passphrase') ?? '')
    const confirmation = String(formData.get('confirmation') ?? '')

    if (passphrase.length < 10) {
      setNotice('Choose a passphrase with at least 10 characters.')
      return
    }
    if (passphrase !== confirmation) {
      setNotice('The passphrases do not match.')
      return
    }
    if (!await createAdminPassphrase(passphrase)) {
      setNotice('This browser could not save the passphrase. Check local storage and secure-browser support.')
      return
    }

    setHasPassphrase(true)
    setNotice('Passphrase created. Sign in to review tributes.')
    form.reset()
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const passphrase = String(formData.get('passphrase') ?? '')

    if (!await verifyAdminPassphrase(passphrase)) {
      setNotice('That passphrase was not recognized.')
      return
    }
    if (!setAdminSessionActive(true)) {
      setNotice('This browser could not start an admin session. Check its storage settings.')
      return
    }

    setIsLoggedIn(true)
    setEntries(readTributes())
    setNotice('')
    form.reset()
  }

  function updateStatus(id: string, status: TributeStatus) {
    const updated = entries.map((entry) => entry.id === id ? { ...entry, status } : entry)
    if (!saveTributes(updated)) {
      setNotice('Could not save this change in browser storage.')
      return
    }
    setEntries(updated)
    setNotice(status === 'approved' ? 'Tribute approved and visible on the public page.' : 'Tribute hidden from the public page.')
  }

  function removeTribute(id: string) {
    const updated = entries.filter((entry) => entry.id !== id)
    if (!saveTributes(updated)) {
      setNotice('Could not delete this tribute from browser storage.')
      return
    }
    setEntries(updated)
    setNotice('Tribute deleted.')
  }

  function logout() {
    setAdminSessionActive(false)
    setIsLoggedIn(false)
  }

  const pendingCount = entries.filter((entry) => entry.status === 'pending').length
  const approvedCount = entries.length - pendingCount

  return (
    <MemorialLayout>
      <main className="page-shell admin-page">
        {!isLoggedIn ? (
          <section className="admin-auth-panel feature-panel">
            <p className="eyebrow">Private route · local browser only</p>
            <h2>{hasPassphrase ? 'Admin sign in' : 'Set up admin access'}</h2>
            <p className="admin-local-warning">Tributes and this passphrase exist only in this browser. This local passphrase is a convenience lock, not secure authentication; it cannot protect shared public data.</p>
            {hasPassphrase ? (
              <form className="tribute-form" onSubmit={handleLogin}>
                <label htmlFor="admin-passphrase">Passphrase
                  <input id="admin-passphrase" name="passphrase" type="password" autoComplete="current-password" required />
                </label>
                <button className="primary-btn" type="submit">Sign in</button>
              </form>
            ) : (
              <form className="tribute-form" onSubmit={handleSetup}>
                <label htmlFor="admin-passphrase">Create a passphrase
                  <input id="admin-passphrase" name="passphrase" type="password" autoComplete="new-password" minLength={10} required />
                </label>
                <label htmlFor="admin-confirmation">Confirm passphrase
                  <input id="admin-confirmation" name="confirmation" type="password" autoComplete="new-password" minLength={10} required />
                </label>
                <button className="primary-btn" type="submit">Create local passphrase</button>
              </form>
            )}
            {notice && <p className="admin-notice" role="status">{notice}</p>}
          </section>
        ) : (
          <>
            <header className="admin-heading">
              <div>
                <p className="eyebrow">Family administrator</p>
                <h2>Tribute review</h2>
              </div>
              <button type="button" className="secondary-btn" onClick={logout}>Sign out</button>
            </header>

            <p className="admin-local-warning">Local browser storage only. These entries are not shared with other visitors, devices, or browsers.</p>

            <section className="admin-stats" aria-label="Tribute totals">
              <article className="summary-card"><span>Awaiting review</span><strong>{pendingCount}</strong></article>
              <article className="summary-card"><span>Published</span><strong>{approvedCount}</strong></article>
              <article className="summary-card"><span>Total saved here</span><strong>{entries.length}</strong></article>
            </section>

            {notice && <p className="admin-notice" role="status">{notice}</p>}

            <section className="admin-tribute-list" aria-labelledby="admin-tributes-title">
              <div className="section-header">
                <p className="eyebrow">Moderation</p>
                <h3 id="admin-tributes-title">All saved tributes</h3>
              </div>
              {entries.length === 0 ? (
                <p className="tribute-empty">No tributes have been submitted in this browser.</p>
              ) : entries.map((entry) => (
                <article className="admin-tribute-card" key={entry.id}>
                  <div className="admin-tribute-heading">
                    <div>
                      <h4>{entry.name}</h4>
                      <p>{entry.relationship} · {new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(entry.submittedAt))}</p>
                    </div>
                    <span className={`admin-status admin-status--${entry.status}`}>{entry.status}</span>
                  </div>
                  <p className="admin-tribute-message">{entry.message}</p>
                  <div className="admin-tribute-actions">
                    {entry.status === 'pending' ? (
                      <button type="button" className="primary-btn" onClick={() => updateStatus(entry.id, 'approved')}>Approve and publish</button>
                    ) : (
                      <button type="button" className="secondary-btn" onClick={() => updateStatus(entry.id, 'pending')}>Hide from public</button>
                    )}
                    <button type="button" className="admin-delete-btn" onClick={() => removeTribute(entry.id)}>Delete</button>
                  </div>
                </article>
              ))}
            </section>
          </>
        )}
      </main>
    </MemorialLayout>
  )
}