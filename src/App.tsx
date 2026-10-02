import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HerStoryPage from './pages/HerStoryPage'
import HomePage from './pages/HomePage'
import MemoriesPage from './pages/MemoriesPage'
import AdminPage from './pages/AdminPage'
import TributesPage from './pages/TributesPage'

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

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/biography" element={<HerStoryPage />} />
          <Route path="/story" element={<HerStoryPage />} />
          <Route path="/memories" element={<MemoriesPage />} />
          <Route path="/tribute" element={<TributesPage />} />
          <Route path="/tributes" element={<TributesPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
