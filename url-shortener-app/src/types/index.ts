export interface Url {
  originalUrl: string;
  shortenedUrl: string;
}

export interface ShortenedUrlResponse {
  success: boolean;
  data: Url;
  message?: string;
}