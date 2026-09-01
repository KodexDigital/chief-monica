import { useEffect, useState } from 'react'
import './App.css'
import PublicMemorialPage from './pages/PublicMemorialPage'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1100)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <div className={`page-loader ${isLoading ? 'is-visible' : 'is-hidden'}`} aria-live="polite">
        <div className="loader-core">
          <div className="loader-ring loader-ring--outer" />
          <div className="loader-ring loader-ring--inner" />
          <div className="loader-mark">✦</div>
        </div>
        <p>In loving memory</p>
      </div>

      <PublicMemorialPage />
    </>
  )
}

export default App
