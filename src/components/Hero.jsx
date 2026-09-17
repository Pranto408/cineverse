import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="bg-gradient-to-b from-red-900 via-gray-900 to-gray-950 py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-5">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Welcome to <span className="text-red-500">CineVerse</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Discover thousands of TV shows and movies, search your favorite titles
          and explore all the details in one place.
        </p>
        <Link
          to="/movies"
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold text-lg"
        >
          Browse Movies
        </Link>
      </div>
    </section>
  )
}

export default Hero
