import { memorialProfile } from '../data/memorialData'

export default function AdminDashboard() {
  return (
    <div className="admin-shell">
      <header className="admin-header">
        <div>
          <p className="eyebrow">Family administrator</p>
          <h2>{memorialProfile.fullName}</h2>
        </div>
        <button type="button" className="primary-btn">
          Publish update
        </button>
      </header>

      <section className="admin-grid stats-grid">
        {memorialProfile.adminStats.map((item) => (
          <article key={item.label} className="summary-card admin-stat">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>

      <section className="admin-grid management-grid">
        <div className="panel-block">
          <h3>Memorial management</h3>
          <ul className="management-list">
            {memorialProfile.manageSections.map((section) => (
              <li key={section}>{section}</li>
            ))}
          </ul>
        </div>

        <div className="panel-block">
          <h3>Moderation queue</h3>
          <ul className="management-list muted-list">
            <li>3 tribute submissions awaiting review</li>
            <li>2 family stories pending approval</li>
            <li>1 new photo album draft</li>
          </ul>
        </div>
      </section>

      <section className="panel-block">
        <h3>Quick actions</h3>
        <div className="quick-actions">
          <button type="button" className="secondary-btn">Add timeline event</button>
          <button type="button" className="secondary-btn">Upload photo</button>
          <button type="button" className="secondary-btn">Review tribute</button>
          <button type="button" className="secondary-btn">Update memorial profile</button>
        </div>
      </section>
    </div>
  )
}
