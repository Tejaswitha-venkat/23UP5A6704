import React, { useState } from 'react'
import './App.css'

type Url = {
  original: string
  short: string
  clicks: number
}

const initialUrls: Url[] = [
  { original: 'https://example.com', short: 'abc123', clicks: 12 },
  { original: 'https://github.com', short: 'def456', clicks: 7 },
  { original: 'https://react.dev', short: 'ghi789', clicks: 3 },
]

function App() {
  const [urls] = useState<Url[]>(initialUrls)

  return (
    <div className="container">
      <h1>URL Shortener Statistics</h1>
      <p>Total URLs shortened: {urls.length}</p>
      <table>
        <thead>
          <tr>
            <th>Short URL</th>
            <th>Original URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url, idx) => (
            <tr key={idx}>
              <td>
                <a href={url.original} target="_blank" rel="noopener noreferrer">
                  {window.location.origin}/{url.short}
                </a>
              </td>
              <td>
                <a href={url.original} target="_blank" rel="noopener noreferrer">
                  {url.original}
                </a>
              </td>
              <td>{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
