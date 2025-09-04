import React from 'react';

interface ShortenedUrlProps {
  originalUrl: string;
  shortenedUrl: string;
}

const ShortenedUrl: React.FC<ShortenedUrlProps> = ({ originalUrl, shortenedUrl }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl)
      .then(() => {
        alert('Shortened URL copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="shortened-url">
      <p>Original URL: <a href={originalUrl} target="_blank" rel="noopener noreferrer">{originalUrl}</a></p>
      <p>Shortened URL: <span onClick={copyToClipboard} style={{ cursor: 'pointer', color: 'blue' }}>{shortenedUrl}</span></p>
    </div>
  );
};

export default ShortenedUrl;