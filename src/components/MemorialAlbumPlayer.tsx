import { memorialProfile } from '../data/memorialData'

export default function MemorialAlbumPlayer() {
  if (!memorialProfile.musicAlbumId) return null

  const albumEmbedUrl = new URL('https://www.youtube.com/embed/videoseries')
  albumEmbedUrl.searchParams.set('list', memorialProfile.musicAlbumId)
  albumEmbedUrl.searchParams.set('rel', '0')

  return (
    <section className="music-memory" aria-labelledby="music-memory-title" data-reveal>
      <div className="music-memory-story">
        <div className="music-memory-record" aria-hidden="true">
          <span className="music-memory-record-label">In loving<br />memory</span>
        </div>
        <div className="music-memory-copy">
          <p className="eyebrow">A musical remembrance</p>
          <h2 id="music-memory-title">Songs in her honour</h2>
          <p>A collection created for her, to be held close and returned to whenever she is missed.</p>
          <span className="music-memory-invitation">
            <span className="music-memory-invitation-mark" aria-hidden="true">♪</span>
            Listen when you are ready
          </span>
        </div>
      </div>
      <div className="music-memory-listening">
        <div className="music-memory-player">
          <iframe
            src={albumEmbedUrl.toString()}
            title="Play the album in her honour on YouTube"
            loading="lazy"
            allow="encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <a
          className="music-memory-link"
          href={`https://music.youtube.com/playlist?list=${encodeURIComponent(memorialProfile.musicAlbumId)}`}
          target="_blank"
          rel="noreferrer"
        >
          Open album on YouTube Music <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
