import { useState } from 'react'
import './App.css'

function generateShortUrl() {
  return Math.random().toString(36).substring(2, 8)
}

function App() {
  const [originalUrl, setOriginalUrl] = useState('')
  const [urls, setUrls] = useState<{ original: string; short: string }[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!originalUrl) return
    const short = generateShortUrl()
    setUrls([{ original: originalUrl, short }, ...urls])


    setOriginalUrl('')
  }

  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter URL"
          value={originalUrl}
          onChange={e => setOriginalUrl(e.target.value)}
          required
        />
        <button type="submit">Shorten</button>
      </form>
      <ul>
        {urls.map((url, idx) => (
          <li key={idx}>
            <div>
              <span>Original: </span>
              <a href={url.original} target="_blank" rel="noopener noreferrer">{url.original}</a>
            </div>
            <div>
              <span>Short: </span>
              <a href={url.original} target="_blank" rel="noopener noreferrer">
                {window.location.origin}/{url.short}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App