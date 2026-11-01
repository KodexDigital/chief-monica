import { useEffect, useState } from 'react'
import { memorialProfile } from '../data/memorialData'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

function getCountdown(target: number, now: number) {
  const remaining = Math.max(0, target - now)
  const days = Math.floor(remaining / DAY)
  const hours = Math.floor((remaining % DAY) / HOUR)
  const minutes = Math.floor((remaining % HOUR) / MINUTE)
  const seconds = Math.floor((remaining % MINUTE) / SECOND)

  return { days, hours, minutes, seconds }
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00+01:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Africa/Lagos',
  })
}

export default function ProgramCountdown() {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const intervalId = window.setInterval(() => setNow(Date.now()), SECOND)
    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className="program-countdown" aria-label="Burial programme countdowns">
      <div className="program-countdown-heading">
        <p className="eyebrow">In remembrance</p>
        <h2>Burial Programme</h2>
        <p className="program-countdown-intro">We gather to celebrate a life and honour a lasting legacy.</p>
      </div>

      <div className="program-countdown-events">
        {memorialProfile.burialProgram.map((event) => {
          const target = new Date(`${event.date}T00:00:00+01:00`).getTime()
          const remaining = target - now
          const countdown = getCountdown(target, now)
          const eventIsToday = remaining <= 0 && remaining > -DAY
          const eventHasPassed = remaining <= -DAY

          return (
            <article className="program-countdown-event" key={event.location}>
              <div className="program-countdown-event-heading">
                <h3>{event.location}</h3>
                <time dateTime={event.date}>{formatDate(event.date)}</time>
              </div>

              {eventIsToday || eventHasPassed ? (
                <p className="program-countdown-status">
                  {eventIsToday ? 'The programme is taking place today' : 'This programme day has passed'}
                </p>
              ) : (
                <div
                  className="countdown-units"
                  role="timer"
                  aria-label={`Countdown to the ${event.location} programme`}
                >
                  {Object.entries(countdown).map(([unit, value]) => (
                    <div className="countdown-unit" key={unit}>
                      <span className="countdown-value" key={value}>
                        {String(value).padStart(2, '0')}
                      </span>
                      <span className="countdown-label">{unit}</span>
                    </div>
                  ))}
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
