import React from 'react'
import ShortenedUrl from './ShortenedUrl'

interface UrlListProps {
  urls: { original: string; shortened: string }[]
}

const UrlList: React.FC<UrlListProps> = ({ urls }) => {
  return (
    <div>
      <h2>Shortened URLs</h2>
      <ul>
        {urls.map((url, index) => (
          <li key={index}>
            <ShortenedUrl original={url.original} shortened={url.shortened} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UrlList