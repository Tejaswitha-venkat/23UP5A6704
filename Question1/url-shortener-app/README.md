# URL Shortener Application

This is a simple URL shortener web application built with React and TypeScript. The application allows users to input a URL they want to shorten and displays a list of shortened URLs.

## Features

- Input a URL to shorten
- Display a list of shortened URLs
- Copy shortened URLs to clipboard

## Project Structure

```
url-shortener-app
├── src
│   ├── components
│   │   ├── UrlForm.tsx
│   │   ├── UrlList.tsx
│   │   └── ShortenedUrl.tsx
│   ├── pages
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── types
│   │   └── index.ts
│   └── styles
│       └── App.css
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd url-shortener-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm run dev
```

Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.

## License

This project is open-source and available under the [MIT License](LICENSE).