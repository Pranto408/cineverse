# CineVerse

A responsive Movie Explorer app built with React and Tailwind CSS. Browse movies, search by title, and view detailed info in a modal.

## Features

- Home page with hero banner
- Movie listing page with live search
- Responsive movie grid (poster, title, year, rating)
- Movie details modal (summary, rating, genre, network)
- Fully responsive design (mobile and desktop)

## Tech Stack

- React
- Tailwind CSS
- React Router
- Lucide React (icons)
- TVMaze API

## Getting Started

Install dependencies:

```
npm install
```

Run the app in development mode:

```
npm run dev
```

Build for production:

```
npm run build
```

## API Used

This project uses the free [TVMaze API](https://www.tvmaze.com/api):

- `GET /shows` - fetch all shows
- `GET /search/shows?q=:query` - search shows by title
